import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createEquals_FunctionalPropertyUnion = _test_equals(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    typia.createEquals<FunctionalPropertyUnion>(),
);
