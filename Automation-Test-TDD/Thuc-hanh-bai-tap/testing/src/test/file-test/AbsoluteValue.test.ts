import {AbsoluteValue} from "../../file-code/AbsoluteValue";

describe("find Absolute",() => {
    test("find Absolute of number",() => {
        const number1 = -7;

        const result1 = 7;

        expect(AbsoluteValue.findAbsolute(number1)).toBe(result1);
    });
});