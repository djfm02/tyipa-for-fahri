import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagRange } from "../../../structures/TagRange";

export const test_isStringify_TagRange = _test_isStringify(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: Array<TagRange.Type>): string | null => {
            const is = (input: any): input is Array<TagRange.Type> => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Number.isFinite(input.greater) &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Number.isFinite(input.greater_equal) &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Number.isFinite(input.less) &&
                    7 > input.less &&
                    "number" === typeof input.less_equal &&
                    Number.isFinite(input.less_equal) &&
                    7 >= input.less_equal &&
                    "number" === typeof input.greater_less &&
                    3 < input.greater_less &&
                    7 > input.greater_less &&
                    "number" === typeof input.greater_equal_less &&
                    3 <= input.greater_equal_less &&
                    7 > input.greater_equal_less &&
                    "number" === typeof input.greater_less_equal &&
                    3 < input.greater_less_equal &&
                    7 >= input.greater_less_equal &&
                    "number" === typeof input.greater_equal_less_equal &&
                    3 <= input.greater_equal_less_equal &&
                    7 >= input.greater_equal_less_equal;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify = (input: Array<TagRange.Type>): string => {
                const $number = (typia.isStringify as any).number;
                return `[${input
                    .map(
                        (elem: any) =>
                            `{"greater":${$number(
                                (elem as any).greater,
                            )},"greater_equal":${$number(
                                (elem as any).greater_equal,
                            )},"less":${$number(
                                (elem as any).less,
                            )},"less_equal":${$number(
                                (elem as any).less_equal,
                            )},"greater_less":${$number(
                                (elem as any).greater_less,
                            )},"greater_equal_less":${$number(
                                (elem as any).greater_equal_less,
                            )},"greater_less_equal":${$number(
                                (elem as any).greater_less_equal,
                            )},"greater_equal_less_equal":${$number(
                                (elem as any).greater_equal_less_equal,
                            )}}`,
                    )
                    .join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TagRange.SPOILERS,
);
