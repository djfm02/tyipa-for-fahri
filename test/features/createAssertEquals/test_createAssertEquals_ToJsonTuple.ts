import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertEquals_ToJsonTuple = _test_assertEquals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createAssertEquals<ToJsonTuple>(),
);
