import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createIs_FunctionalTuple = _test_is(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createIs<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
