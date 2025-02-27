import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createPrune_ObjectUnionDouble = _test_prune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createPrune<ObjectUnionDouble>(),
);
