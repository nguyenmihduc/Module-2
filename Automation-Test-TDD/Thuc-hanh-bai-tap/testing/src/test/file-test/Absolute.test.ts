
import {Absolute} from "../../file-code/Absolute";

describe("findAbsolut",() => {
    test("find Absolute of number",() => {
        const number1 = -6;

        const result1 = 6;

        expect(Absolute.findAbsolute(number1)).toBe(result1);
    });
});