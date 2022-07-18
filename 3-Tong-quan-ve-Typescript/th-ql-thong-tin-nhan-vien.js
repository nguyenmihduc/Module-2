var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, birth, email, phone) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
var listStaff = [];
function showStaff(staff) {
    console.log("nhan vien: ".concat(staff.name, " , gioi tinh: ").concat(staff.gender, " , ngay sinh: ").concat(staff.birth, " , email: ").concat(staff.email, ", phone: ").concat(staff.phone));
}
var staff1 = new Staff("minh", Gender.FEMALE, "1990-09-19", "minh@gmail.com", "012345777");
var staff2 = new Staff("Lan", Gender.MALE, "1980-10-20", "Lan.com", "012345888");
var staff3 = new Staff("Hoa", Gender.OTHER, "1970-11-21", "Hoa.com");
listStaff.push(staff1, staff2, staff3);
// showStaff(staff3)
listStaff.forEach(showStaff);
// tsc .\th-ql-thong-tin-nhan-vien.ts
// node .\th-ql-thong-tin-nhan-vien.js
