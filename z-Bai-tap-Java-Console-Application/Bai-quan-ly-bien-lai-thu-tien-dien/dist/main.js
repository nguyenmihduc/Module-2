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
    console.log('---QU???N L?? BI??N LAI THU TI???N ??I???N---');
    console.log('1---Nh???p bi??n lai m???i---');
    console.log('2---Danh s??ch bi??n lai---');
    console.log('3---Check ti???n ??i???n c???a ch??? h???---');
    console.log('0---Tho??t ch????ng tr??nh---');
    choice = +rl.question('Nh???p l???a chon:');
    switch (choice) {
        case 1: {
            console.log('1---Nh???p bi??n lai m???i---');
            let tenChuHo = rl.question('nh???p t??n ch??? h???:');
            let soNha = rl.question('nh???p s??? nh??:');
            let maSoCongTo = KhachHang_1.KhachHang.MaSoCongTo();
            let khachHang = new KhachHang_1.KhachHang(tenChuHo, soNha, maSoCongTo);
            let chiSoCu = +rl.question('nh???p ch??? s??? c??:');
            let chiSoMoi = +rl.question('nh???p ch??? s??? m???i:');
            let tienPhaitra = (chiSoMoi - chiSoCu) * 750;
            let bienLai = new Bienlai_1.Bienlai(khachHang, chiSoCu, chiSoMoi, tienPhaitra);
            quanLyBienLai.nhapBienLai(bienLai);
            break;
        }
        case 2: {
            console.log('2---Danh s??ch bi??n lai---');
            let cacBienLai = quanLyBienLai.hienThiDanhSachBienLai();
            for (const bienLai of cacBienLai) {
                console.log(`Ch??? h???: ${bienLai.KhachHang.HotenChuHo}, ?????a ch???: ${bienLai.KhachHang.SoNha}, m?? c??ng t??: ${bienLai.KhachHang.MaSoCongTo}, ch??? s??? c??: ${bienLai.ChiSoCu}, ch??? s??? m???i: ${bienLai.ChiSoMoi}, ti???n ph???i tr???:${bienLai.SoTienPhaiTra} `);
            }
            break;
        }
        case 3: {
            console.log('3---Check ti???n ??i???n c???a ch??? h???---');
            let countCheck = 0;
            let indexCheck = -1;
            let nameCheck = rl.question('nh???p t??n ch??? h??? c???n check:');
            quanLyBienLai.hienThiDanhSachBienLai().forEach((item, index) => {
                if (nameCheck === item.KhachHang.HotenChuHo) {
                    countCheck++;
                    indexCheck = index;
                }
            });
            if (countCheck != 0) {
                console.log(`ch??? h???: ${quanLyBienLai.hienThiDanhSachBienLai()[indexCheck].KhachHang.HotenChuHo} ph???i tr??? s??? ti???n: ${quanLyBienLai.hienThiDanhSachBienLai()[indexCheck].SoTienPhaiTra}`);
            }
            else if (countCheck == 0) {
                console.log('t??n ch??? h??? kh??ng c?? trong danh s??ch');
            }
            break;
        }
    }
} while (choice != 0);
