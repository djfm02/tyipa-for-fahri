import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createAssertParse_TemplateConstant = _test_assertParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input: string): typia.Primitive<TemplateConstant> => {
        const assert = (input: any): TemplateConstant => {
            const __is = (input: any): input is TemplateConstant => {
                const $io0 = (input: any): boolean =>
                    ("prefix_A" === input.prefix ||
                        "prefix_B" === input.prefix ||
                        "prefix_C" === input.prefix) &&
                    ("1_postfix" === input.postfix ||
                        "3_postfix" === input.postfix ||
                        "2_postfix" === input.postfix) &&
                    ("the_1_value_with_label_A" === input.combined ||
                        "the_1_value_with_label_B" === input.combined ||
                        "the_1_value_with_label_C" === input.combined ||
                        "the_3_value_with_label_A" === input.combined ||
                        "the_3_value_with_label_B" === input.combined ||
                        "the_3_value_with_label_C" === input.combined ||
                        "the_2_value_with_label_A" === input.combined ||
                        "the_2_value_with_label_B" === input.combined ||
                        "the_2_value_with_label_C" === input.combined);
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TemplateConstant => {
                    const $guard = (typia.createAssertParse as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("prefix_A" === input.prefix ||
                            "prefix_B" === input.prefix ||
                            "prefix_C" === input.prefix ||
                            $guard(_exceptionable, {
                                path: _path + ".prefix",
                                expected:
                                    '("prefix_A" | "prefix_B" | "prefix_C")',
                                value: input.prefix,
                            })) &&
                        ("1_postfix" === input.postfix ||
                            "3_postfix" === input.postfix ||
                            "2_postfix" === input.postfix ||
                            $guard(_exceptionable, {
                                path: _path + ".postfix",
                                expected:
                                    '("1_postfix" | "2_postfix" | "3_postfix")',
                                value: input.postfix,
                            })) &&
                        ("the_1_value_with_label_A" === input.combined ||
                            "the_1_value_with_label_B" === input.combined ||
                            "the_1_value_with_label_C" === input.combined ||
                            "the_3_value_with_label_A" === input.combined ||
                            "the_3_value_with_label_B" === input.combined ||
                            "the_3_value_with_label_C" === input.combined ||
                            "the_2_value_with_label_A" === input.combined ||
                            "the_2_value_with_label_B" === input.combined ||
                            "the_2_value_with_label_C" === input.combined ||
                            $guard(_exceptionable, {
                                path: _path + ".combined",
                                expected:
                                    '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                                value: input.combined,
                            }));
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TemplateConstant",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TemplateConstant.Type",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TemplateConstant.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TemplateConstant",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    },
    TemplateConstant.SPOILERS,
);
