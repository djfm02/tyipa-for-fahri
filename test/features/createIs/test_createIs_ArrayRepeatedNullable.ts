import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createIs_ArrayRepeatedNullable = _test_is(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIs<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
