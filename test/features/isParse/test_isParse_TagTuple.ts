import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagTuple = _test_isParse(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.isParse<TagTuple>(input),
    TagTuple.SPOILERS,
);
