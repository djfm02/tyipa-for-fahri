import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_prune_AtomicIntersection = _test_prune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.prune(input),
);
