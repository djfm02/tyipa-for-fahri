import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertEquals_ArrayAtomicAlias = _test_assertEquals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertEquals<ArrayAtomicAlias>(),
);
