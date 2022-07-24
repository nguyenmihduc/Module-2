"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const KhachHang_1 = require("./src/KhachHang");
const Bienlai_1 = require("./src/Bienlai");
const QuanLyBienLai_1 = require("./src/QuanLyBienLai");
function taoDataKhachHang() {
    let khachHang1 = new KhachHang_1.KhachHang("duc", "so 1 Minh Khai", KhachHang_1.KhachHang.MaSoCongTo());
    let khachHang2 = new KhachHang_1.KhachHang("tung", "so 2 Minh Khai", KhachHang_1.KhachHang.MaSoCongTo());
    let khachHang3 = new KhachHang_1.KhachHang("bao", "so 3 Minh Khai", KhachHang_1.KhachHang.MaSoCongTo());
    let chisocu1 = 50;
    let chisomoi1 = 100;
    let tienphaitra1 = (chisomoi1 - chisocu1) * 750;
    let bienlai1 = new Bienlai_1.Bienlai(khachHang1, chisocu1, chisomoi1, tienphaitra1);
    let chisocu2 = 70;
    let chisomoi2 = 130;
    let tienphaitra2 = (chisomoi2 - chisocu2) * 750;
    let bienlai2 = new Bienlai_1.Bienlai(khachHang2, chisocu2, chisomoi2, tienphaitra2);
    let chisocu3 = 80;
    let chisomoi3 = 150;
    let tienphaitra3 = (chisomoi3 - chisocu3) * 750;
    let bienlai3 = new Bienlai_1.Bienlai(khachHang3, chisocu3, chisomoi3, tienphaitra3);
    let quanLyBienLai = new QuanLyBienLai_1.QuanLyBienLai();
    quanLyBienLai.nhapBienLai(bienlai1);
    quanLyBienLai.nhapBienLai(bienlai2);
    quanLyBienLai.nhapBienLai(bienlai3);
    return quanLyBienLai;
}
let quanLyBienLai = taoDataKhachHang();
// let quanLyBienLai = new QuanLyBienLai();
let choice;
do {
    console.log('---QUẢN LÝ BIÊN LAI THU TIỀN ĐIỆN---');
    console.log('1---Nhập biên lai mới---');
    console.log('2---Danh sách biên lai---');
    console.log('3---Check tiền điện của chủ hộ---');
    console.log('0---Thoát chương trình---');
    choice = +rl.question('Nhập lựa chon:');
    switch (choice) {
        case 1: {
            console.log('1---Nhập biên lai mới---');
            let tenChuHo = rl.question('nhập tên chủ hộ:');
            let soNha = rl.question('nhập số nhà:');
            let maSoCongTo = KhachHang_1.KhachHang.MaSoCongTo();
            let khachHang = new KhachHang_1.KhachHang(tenChuHo, soNha, maSoCongTo);
            let chiSoCu = +rl.question('nhập chỉ số cũ:');
            let chiSoMoi = +rl.question('nhập chỉ số mới:');
            let tienPhaitra = (chiSoMoi - chiSoCu) * 750;
            let bienLai = new Bienlai_1.Bienlai(khachHang, chiSoCu, chiSoMoi, tienPhaitra);
            quanLyBienLai.nhapBienLai(bienLai);
            break;
        }
        case 2: {
            console.log('2---Danh sách biên lai---');
            let cacBienLai = quanLyBienLai.hienThiDanhSachBienLai();
            for (const bienLai of cacBienLai) {
                console.log(`Chủ hộ: ${bienLai.KhachHang.HotenChuHo}, địa chỉ: ${bienLai.KhachHang.SoNha}, mã công tơ: ${bienLai.KhachHang.MaSoCongTo}, chỉ số cũ: ${bienLai.ChiSoCu}, chỉ số mới: ${bienLai.ChiSoMoi}, tiền phải trả:${bienLai.SoTienPhaiTra} `);
            }
            break;
        }
        case 3: {
            console.log('3---Check tiền điện của chủ hộ---');
            let countCheck = 0;
            let indexCheck = -1;
            let nameCheck = rl.question('nhập tên chủ hộ cần check:');
            quanLyBienLai.hienThiDanhSachBienLai().forEach((item, index) => {
                if (nameCheck === item.KhachHang.HotenChuHo) {
                    countCheck++;
                    indexCheck = index;
                }
            });
            if (countCheck != 0) {
                console.log(`chủ hộ: ${quanLyBienLai.hienThiDanhSachBienLai()[indexCheck].KhachHang.HotenChuHo} phải trả số tiền: ${quanLyBienLai.hienThiDanhSachBienLai()[indexCheck].SoTienPhaiTra}`);
            }
            else if (countCheck == 0) {
                console.log('tên chủ hộ không có trong danh sách');
            }
            break;
        }
    }
} while (choice != 0);
