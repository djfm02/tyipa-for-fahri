import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagStep } from "../../structures/TagStep";

export const test_createAssertParse_TagStep = _test_assertParse(
    "TagStep",
    TagStep.generate,
    typia.createAssertParse<TagStep>(),
    TagStep.SPOILERS,
);
