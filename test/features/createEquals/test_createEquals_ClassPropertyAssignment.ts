import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createEquals_ClassPropertyAssignment = _test_equals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createEquals<ClassPropertyAssignment>(),
);
