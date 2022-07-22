export class IpRegex {
    private TP_REGEX: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}$/
    validate(regex: string): boolean {
        return this.TP_REGEX.test(regex)
    }
}