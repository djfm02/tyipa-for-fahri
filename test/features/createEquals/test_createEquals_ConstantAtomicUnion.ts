import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createEquals_ConstantAtomicUnion = _test_equals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createEquals<ConstantAtomicUnion>(),
);
