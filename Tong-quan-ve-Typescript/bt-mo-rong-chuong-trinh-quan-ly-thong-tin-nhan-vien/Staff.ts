export enum Gender {
    MALE = 1,
    FEMALE,
    OTHER ,
}

export class Staff {
    private _name: string;
    private _gender: Gender;
    private _birth: string;
    private _email: string;
    private _ID: number
    private _phone?: string

    constructor(name: string, gender: Gender, birth: string, email: string, ID: number, phone?: string) {
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._email = email;
        this._ID = ID;
        this._phone = phone;
    }
    getName(): string {
        return this._name;
    }
    setName(value: string) {
        this._name = value;
    }

    getGender(): Gender {
        return this._gender;
    }
    setGender(value: Gender) {
        this._gender = value;
    }

    getBirth(): string {
        return this._birth;
    }
    setBirth(value: string) {
        this._birth = value;
    }

    getEmail(): string {
        return this._email;
    }
    setEmail(value: string) {
        this._email = value;
    }

    getPhone(): string {
        return this._phone;
    }
    setPhone(value: string) {
        this._phone = value;
    }

    getID(): number {
        return this._ID;
    }
    setID(value: number) {
        this._ID = value;
    }
}



