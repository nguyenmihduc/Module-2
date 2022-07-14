export class AbsoluteValue {
    static findAbsolute(x: number) {
        if (x > 0) {
            return x;
        } else if (x < 0) {
            return x * -1;
        } else {
            return 0
        }
    }
}