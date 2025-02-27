import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validatePrune_ObjectTuple = _test_validatePrune(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validatePrune(input),
    ObjectTuple.SPOILERS,
);
