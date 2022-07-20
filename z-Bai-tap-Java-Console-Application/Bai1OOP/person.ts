export class Person {
    private _name: string;
    private _dod: string;
    private _identity: string;

    constructor(name: string, dod: string, identity: string) {
        this._name = name;
        this._dod = dod;
        this._identity = identity;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dod(): string {
        return this._dod;
    }

    set dod(value: string) {
        this._dod = value;
    }

    get identity(): string {
        return this._identity;
    }

    set identity(value: string) {
        this._identity = value;
    }
}