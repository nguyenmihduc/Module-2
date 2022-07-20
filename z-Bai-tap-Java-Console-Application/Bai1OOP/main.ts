import * as rl from 'readline-sync';
import {HotelManagement} from "./hotel-management";
import {Person} from "./person";
import {Hotel} from "./hotel";
enum HotelChoice {
    SHOW_LIST_HOTEL = 1,
    SHOW_CREATE_HOTEL = 2,
    SHOW_EDIT_HOTEL = 3,
    SHOW_DELETE_HOTEL = 4,
    EXIT = 0
}


let hotelManagement = new HotelManagement()
// let person1 = new Person('duc', '14-12', '012345')
// let hotel1 = new Hotel(5,'vip A',800,person1)
// hotelManagement.createNewHotel(hotel1)
// console.table(hotelManagement.getAll())
// console.table(person1)
let choice = -1

function showAllHotel() {
    console.log('---Danh sách khách trọ---');
    let hotels = hotelManagement.getAll();
    for (const hotel of hotels) {
        console.log(`${hotel.dayOfRent}  ${hotel.type}  ${hotel.price}  ${hotel.person.name}`)
    }
}

function inputPerson() {

    let name = rl.question('nhập tên khách trọ:');
    let dob = rl.question('nhập ngày sinh:');
    let identity = rl.question('nhập số CMND:');
    return new Person(name, dob, identity);
}

function inputHotel() {
    let person = inputPerson();
    let dayOfRent = +rl.question('nhập số ngày thuê:');
    let type = rl.question('nhập loại phòng:');
    let price = +rl.question('nhập giá phòng:');
    return new Hotel(dayOfRent, type, price, person);
}

function showCreateHotel() {
    console.log('---Tạo thông tin khách trọ:---');
    let hotel = inputHotel();
    hotelManagement.createNewHotel(hotel);
}

function showUpdateHotel() {
    console.log('---Chỉnh sửa thông tin trọ---');
    let index = +rl.question('nhập vị trí cần chỉnh sửa:');
    let hotel = inputHotel();
    hotelManagement.updateHotel(index, hotel)
}

function menu() {
    console.log('---Quản lý khách sạn---');
    console.log('1. Hiển thị danh sách khách trọ');
    console.log('2. Tạo thông tin khách trọ');
    console.log('3. Chỉnh sửa thông tin trọ');
    console.log('4. Xóa thông tin khách trọ');
    console.log('0. Thoát chương trình');
}

function showDeleteForm() {
    console.log('---Xóa thông tin khách trọ---');
    let index = +rl.question('nhập vị trí muốn xóa:')
    hotelManagement.deleteHotel(index)
}

do {
    menu();
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case HotelChoice.SHOW_LIST_HOTEL: {
            showAllHotel();
            break;
        }
        case HotelChoice.SHOW_CREATE_HOTEL: {
            showCreateHotel();
            break;
        }
        case HotelChoice.SHOW_EDIT_HOTEL: {
            showUpdateHotel();
            break;
        }
        case HotelChoice.SHOW_DELETE_HOTEL: {
            showDeleteForm();
            break;
        }
    }
} while (choice != HotelChoice.EXIT);


