import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidate_ObjectHierarchical = _test_validate(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidate<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
