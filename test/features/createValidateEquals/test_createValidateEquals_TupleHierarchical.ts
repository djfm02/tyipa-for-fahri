import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createValidateEquals_TupleHierarchical = _test_validateEquals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createValidateEquals<TupleHierarchical>(),
);
