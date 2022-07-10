import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "./_test_validate";

export const test_validate_array_simple = _test_validate(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.validate(input),
    [
        (input) => (input[0].name = false as any as string) && true,
        (input) => (input[0].email = ["a", "b"] as any as string) && true,
        (input) => (input[0].hobbies = false as any as any) && true,
        (input) =>
            (input[0].hobbies = [false, "something", 3] as any as string[]) &&
            true,
        (input) =>
            (input[0].hobbies = [
                {
                    name: "name",
                    rank: "best" as any as number,
                },
            ]) && true,
        (input) =>
            (input[0].hobbies = [
                {
                    body: 3 as any as string,
                },
            ]) && true,
        (input) =>
            (input[0].hobbies = [
                {
                    name: "name",
                    rank: 3,
                },
                {
                    body: "something",
                } as any,
            ]) && true,
        (input) => (input[1] = null!) && true,
    ],
);
