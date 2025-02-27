import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_validate_ArrayAny = _test_validate(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.validate(input),
    ArrayAny.SPOILERS,
);
