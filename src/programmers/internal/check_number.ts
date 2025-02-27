import ts from "typescript";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_number =
    (project: IProject, numeric: boolean) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTag: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataTag, ts.Expression][] = [];
        for (const tag of metaTags)
            if (tag.kind === "type") {
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("parseInt"),
                            undefined,
                            [input],
                        ),
                        input,
                    ),
                ]);
                if (tag.value === "uint")
                    entries.push([
                        tag,
                        ts.factory.createLessThanEquals(
                            ts.factory.createNumericLiteral(0),
                            input,
                        ),
                    ]);
            } else if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        ts.factory.createModulo(
                            input,
                            ts.factory.createNumericLiteral(tag.value),
                        ),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = ts.factory.createModulo(
                    input,
                    ts.factory.createNumericLiteral(tag.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo,
                                  ts.factory.createNumericLiteral(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    ts.factory.createLessThan(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThan(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);

        return {
            expression: is_number(project, numeric)(metaTags)(input),
            tags: [
                ...entries.map(([tag, expression]) => ({
                    expected: `number (@${tag.kind} ${tag.value})`,
                    expression,
                })),
                ...check_custom("number")(importer)(jsDocTag)(input),
            ],
        };
    };

/**
 * @internal
 */
const is_number =
    ({ options }: IProject, numeric: boolean) =>
    (metaTags: IMetadataTag[]) =>
    (input: ts.Expression) => {
        // TYPEOF STATEMENT
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("number"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // CHECK FINITE AND NAN
        const finite: boolean =
            (!!metaTags.find(
                (tag) =>
                    tag.kind === "minimum" || tag.kind === "exclusiveMinimum",
            ) &&
                !!metaTags.find(
                    (tag) =>
                        tag.kind === "maximum" ||
                        tag.kind === "exclusiveMaximum",
                )) ||
            !!metaTags.find(
                (tag) => tag.kind === "step" || tag.kind === "multipleOf",
            );

        if (numeric === true && finite === false)
            if (OptionPredicator.finite(options))
                conditions.push(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Number.isFinite"),
                        undefined,
                        [input],
                    ),
                );
            else if (OptionPredicator.numeric(options))
                conditions.push(
                    ts.factory.createLogicalNot(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Number.isNaN"),
                            undefined,
                            [input],
                        ),
                    ),
                );

        // COMBINATE
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
