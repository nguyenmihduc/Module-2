
export class Student {
    private _name: string;
    private _age: number;
    private _email: string;
    private _group: string;
    private _id: string;

    constructor(name: string, age: number, email: string, group: string, id: string ) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._group = group;
        this._id = id;
    }
    static IdOfStudent() {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lengthId = 4;
        let randomID  = ''
        for (let i = lengthId; i > 0; i--) {
            randomID += chars[Math.floor(Math.random() * chars.length)]
        }
        return randomID;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get id(): string {
        return this._id;
    }

    setId(value: string) {
        this._id = value;
    }
}