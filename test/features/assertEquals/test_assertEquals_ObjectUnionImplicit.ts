import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertEquals_ObjectUnionImplicit = _test_assertEquals(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assertEquals(input),
);
