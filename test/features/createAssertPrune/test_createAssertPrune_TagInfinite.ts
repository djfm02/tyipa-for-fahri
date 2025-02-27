import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_createAssertPrune_TagInfinite = _test_assertPrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createAssertPrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
