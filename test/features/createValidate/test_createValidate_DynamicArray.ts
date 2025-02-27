import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createValidate_DynamicArray = _test_validate(
    "DynamicArray",
    DynamicArray.generate,
    typia.createValidate<DynamicArray>(),
    DynamicArray.SPOILERS,
);
