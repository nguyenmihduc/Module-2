"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyBienLai = void 0;
class QuanLyBienLai {
    constructor() {
        this.listBienLai = [];
    }
    nhapBienLai(bienlai) {
        this.listBienLai.push(bienlai);
    }
    hienThiDanhSachBienLai() {
        return this.listBienLai;
    }
}
exports.QuanLyBienLai = QuanLyBienLai;
