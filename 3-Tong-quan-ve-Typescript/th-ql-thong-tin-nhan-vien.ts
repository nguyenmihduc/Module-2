enum Gender {
    MALE,
    FEMALE,
    OTHER,

}
class Staff {
    name: string;
    gender: Gender;
    birth: string;
    email: string;
    phone?: string;
    constructor(name: string, gender: Gender, birth: string, email: string, phone?: string) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
    }
}
let listStaff: Staff[] = [];
function showStaff(staff: Staff) {
    console.log(`nhan vien: ${staff.name} , gioi tinh: ${staff.gender} , ngay sinh: ${staff.birth} , email: ${staff.email}, phone: ${staff.phone}`)
}

let staff1 = new Staff("minh", Gender.FEMALE, "1990-09-19","minh@gmail.com", "012345777" )
let staff2 = new Staff("Lan", Gender.MALE, "1980-10-20","Lan.com", "012345888" )
let staff3 = new Staff("Hoa", Gender.OTHER, "1970-11-21","Hoa.com",)

listStaff.push(staff1,staff2,staff3)

// showStaff(staff3)

listStaff.forEach(showStaff)
// tsc .\th-ql-thong-tin-nhan-vien.ts
// node .\th-ql-thong-tin-nhan-vien.js