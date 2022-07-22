
class PassRegex {
    // private PASS_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/
    private PASS_REGEX: RegExp = /^[A-Za-z0-9]{6,32}$/
    public validate(regex) {
        return this.PASS_REGEX.test(regex)
    }
}

let passRegex = new PassRegex()
console.log(passRegex.validate("YYYYYYY"))
console.log(passRegex.validate("123456"))
console.log(passRegex.validate("ababab"))
console.log(passRegex.validate("aBa8abn&%$"))