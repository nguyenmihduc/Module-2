class Staff {
    firstname: string;
    lastname: string;
    birtday?: Date;
    adddress: string;
    job: string;
    ID:number;


    constructor(firstname: string, lastname: string, adddress: string, job: string,ID:number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.adddress = adddress;
        this.job = job;
        this.ID=ID;
    }
    getFirstName(): string {
        return this.firstname
    }
    getLastName(): string {
        return this.lastname;
    }
    getAddDress(): string {
        return this.adddress;
    }
    getJob(): string {
        return this.job;
    }
    getID():number{
        return this.ID;
    }
    setFirstname(value: string): void {
        this.firstname = value;
    }
    setLastname(value: string): void {
        this.lastname = value;
    }
    setAdddress(value: string): void {
        this.adddress = value;
    }
    setJob(value: string): void {
        this.job = value;
    }
    setID(value:number):void{
        this.ID=value;
    }

}


class StaffList {
    static staffs: Staff[] = [];
    constructor() {
    }
    addStaff(staff: Staff): void {
        StaffList.staffs.push(staff);
    }
    showStaff(): void {
        for (let i = 0; i < StaffList.staffs.length; i++) {
            console.log(StaffList.staffs[i])
        }
    }
    // showStaffList(): void {
    //     for (let i = 0; i < StaffList.staffs.length; i++) {
    //         console.log(StaffList.staffs[i].lastname)
    //     }
    // }
    deleteStaff(lastname: string): void {
        StaffList.staffs.forEach((staff, index) => {
            if (staff.lastname === lastname) {
                StaffList.staffs.splice(index, 1)
            }
        });
    }
    editStaff(firstname: string,lastname: string, adddress: string, job: string,ID:number){
        StaffList.staffs.forEach((staff, index) => {
            if (staff.ID === ID) {
                staff.setFirstname(firstname);
                staff.setLastname(lastname);
                staff.setAdddress(adddress);
                staff.setJob(job)
            }
        })
    }
}
let staff1 = new Staff('cao', 'tuyen', 'long bien', 'bao ve',1);
let staff2 = new Staff('tran', 'tan', 'quan nhan', 'tiep tan',2);
let staffList = new StaffList()
staffList.addStaff(staff1);
staffList.addStaff(staff2);
staffList.editStaff('cao','tuyen','long bien','to truong',1)
// staffList.showStaff()

staffList.deleteStaff('tan')
staffList.showStaff()