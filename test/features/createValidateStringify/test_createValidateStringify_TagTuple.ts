import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_createValidateStringify_TagTuple = _test_validateStringify(
    "TagTuple",
    TagTuple.generate,
    typia.createValidateStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
