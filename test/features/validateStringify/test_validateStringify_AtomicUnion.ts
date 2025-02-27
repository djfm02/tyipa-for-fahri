import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validateStringify_AtomicUnion = _test_validateStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validateStringify(input),
    AtomicUnion.SPOILERS,
);
