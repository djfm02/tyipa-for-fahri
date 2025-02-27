import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validatePrune_ObjectNullable = _test_validatePrune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validatePrune(input),
    ObjectNullable.SPOILERS,
);
