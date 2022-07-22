
export class PhoneNumberRegex{
    private PHONE_NUMBER_REGEX: RegExp = /^\([+0-9]{2}\)-\([0]{1}[0-9]{9}\)$/
    public validate(regex: string) {
        return this.PHONE_NUMBER_REGEX.test(regex)
    }
}