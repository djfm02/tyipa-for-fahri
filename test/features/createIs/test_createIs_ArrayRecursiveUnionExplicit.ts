import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createIs_ArrayRecursiveUnionExplicit = _test_is(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createIs<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
