var Staff = /** @class */ (function () {
    function Staff(firstname, lastname, adddress, job, ID) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.adddress = adddress;
        this.job = job;
        this.ID = ID;
    }
    Staff.prototype.getFirstName = function () {
        return this.firstname;
    };
    Staff.prototype.getLastName = function () {
        return this.lastname;
    };
    Staff.prototype.getAddDress = function () {
        return this.adddress;
    };
    Staff.prototype.getJob = function () {
        return this.job;
    };
    Staff.prototype.getID = function () {
        return this.ID;
    };
    Staff.prototype.setFirstname = function (value) {
        this.firstname = value;
    };
    Staff.prototype.setLastname = function (value) {
        this.lastname = value;
    };
    Staff.prototype.setAdddress = function (value) {
        this.adddress = value;
    };
    Staff.prototype.setJob = function (value) {
        this.job = value;
    };
    Staff.prototype.setID = function (value) {
        this.ID = value;
    };
    return Staff;
}());
var StaffList = /** @class */ (function () {
    function StaffList() {
    }
    StaffList.prototype.addStaff = function (staff) {
        StaffList.staffs.push(staff);
    };
    StaffList.prototype.showStaff = function () {
        for (var i = 0; i < StaffList.staffs.length; i++) {
            console.log(StaffList.staffs[i]);
        }
    };
    StaffList.prototype.showStaffList = function () {
        for (var i = 0; i < StaffList.staffs.length; i++) {
            console.log(StaffList.staffs[i].lastname);
        }
    };
    StaffList.prototype.deleteStaff = function (lastname) {
        StaffList.staffs.forEach(function (staff, index) {
            if (staff.lastname === lastname) {
                StaffList.staffs.splice(index, 1);
            }
        });
    };
    StaffList.prototype.editStaff = function (firstname, lastname, adddress, job, ID) {
        StaffList.staffs.forEach(function (staff, index) {
            if (staff.ID === ID) {
                staff.setFirstname(firstname);
                staff.setLastname(lastname);
                staff.setAdddress(adddress);
                staff.setJob(job);
            }
        });
    };
    StaffList.staffs = [];
    return StaffList;
}());
var staff1 = new Staff('cao', 'tuyen', 'long bien', 'bao ve', 1);
var staff2 = new Staff('tran', 'tan', 'quan nhan', 'tiep tan', 2);
var staffList = new StaffList();
staffList.addStaff(staff1);
staffList.addStaff(staff2);
staffList.editStaff('cao', 'tuyen', 'long bien', 'to truong', 1);
// staffList.showStaff()
staffList.deleteStaff('tan');
staffList.showStaff();
