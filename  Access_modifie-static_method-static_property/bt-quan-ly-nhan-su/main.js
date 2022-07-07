"use strict";
exports.__esModule = true;
var Staff_1 = require("./Staff");
var Staff_2 = require("./Staff");
var staff1 = new Staff_1.Staff('duc', 'nguyen minh', '14-12-1987', 'Ha Noi', 'nhan vien', 1);
var staff2 = new Staff_1.Staff('loan', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 2);
var staff3 = new Staff_1.Staff('Minh', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 3);
var staffManager1 = new Staff_2.StaffManager();
staffManager1.addStaff(staff1);
staffManager1.addStaff(staff2);
staffManager1.addStaff(staff3);
// staffManager1.getAll()
staffManager1.delStaff('duc');
staffManager1.delStaff('Minh');
staffManager1.editInfo('Hoang', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 2);
staffManager1.getAll();
