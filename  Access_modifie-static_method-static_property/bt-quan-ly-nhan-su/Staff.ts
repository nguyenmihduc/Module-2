export class Staff {
    private _firstName: string;
    private _lastName: string;
    private _birth: string;
    private _address: string;
    private _position: string;
    private _ID: number;

    constructor(firstName: string, lastName: string, birth: string, address: string, position: string, ID: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birth = birth;
        this._address = address;
        this._position = position;
        this._ID = ID;
    }

    getFirstName(): string {
        return this._firstName;
    }
    getLastName(): string {
        return this._lastName;
    }
    getBirth(): string {
        return this._birth;
    }
    getAddress(): string {
        return this._address;
    }
    getPosition(): string {
        return this._position;
    }
    getID(): number {
        return this._ID
    }

    setFirstName(value: string) {
        this._firstName = value;
    }
    setLastName(value: string) {
        this._lastName = value;
    }
    setBirth(value: string) {
        this._birth = value;
    }
    setAddress(value: string) {
        this._address = value;
    }
    setPosition(value: string) {
        this._position = value;
    }
    setID(value: number) {
        this._ID = value;
    }
}

export class StaffManager {
    static listStaff:Staff[] = []
    constructor() {
    }
    getAll() {
        console.log(StaffManager.listStaff)
    }
    addStaff(staff) {
        StaffManager.listStaff.push(staff);
    }
    delStaff(firstName: string) {
        StaffManager.listStaff.forEach((staff, index) => {
            if (staff.getFirstName() === firstName) {
                StaffManager.listStaff.splice(index, 1)
            }
        });
    }
    editInfo(firstName: string, lastName: string, birth: string, address: string, position: string, ID: number) {
        StaffManager.listStaff.forEach((staff) => {
            if (staff.getID() === ID) {
                staff.setFirstName(firstName);
                staff.setLastName(lastName);
                staff.setBirth(birth);
                staff.setAddress(address);
                staff.setPosition(position);
            }
        })
    }
}

