import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_isClone_SetUnion = _test_isClone(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.isClone(input),
    SetUnion.SPOILERS,
);
