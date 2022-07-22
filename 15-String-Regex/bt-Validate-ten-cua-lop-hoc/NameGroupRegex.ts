
export class NameGroupRegex {
    private NAME_GROUP_REGEX: RegExp = /^[CAP][+0-9]{4}[GHIKLM]$/;
    public validate(regex: string): boolean {
        return this.NAME_GROUP_REGEX.test(regex)
    }
}

