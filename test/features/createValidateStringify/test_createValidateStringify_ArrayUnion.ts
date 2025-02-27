import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createValidateStringify_ArrayUnion = _test_validateStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidateStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
