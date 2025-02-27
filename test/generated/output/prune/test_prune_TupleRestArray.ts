import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_prune_TupleRestArray = _test_prune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) =>
        ((input: [boolean, number, ...Array<string>[]]): void => {})(input),
);
