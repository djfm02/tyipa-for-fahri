import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_prune_TagObjectUnion = _test_prune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: Array<TagObjectUnion.Type>): void => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $throws = (typia.prune as any).throws;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu0(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $po1(input);
                    if ("number" === typeof input.value) return $po0(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
                })();
            if (Array.isArray(input)) $pp0(input);
        })(input),
);
