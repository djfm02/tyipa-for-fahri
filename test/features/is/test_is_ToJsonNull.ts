import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_is_ToJsonNull = _test_is(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.is(input),
);
