import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assert_ObjectDynamic = _test_assert(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.assert(input),
    ObjectDynamic.SPOILERS,
);
