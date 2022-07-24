"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bienlai = void 0;
class Bienlai {
    constructor(KhachHang, ChiSoCu, ChiSoMoi, SoTienPhaiTra) {
        this._KhachHang = KhachHang;
        this._ChiSoCu = ChiSoCu;
        this._ChiSoMoi = ChiSoMoi;
        this._SoTienPhaiTra = SoTienPhaiTra;
    }
    get SoTienPhaiTra() {
        return this._SoTienPhaiTra;
    }
    set SoTienPhaiTra(value) {
        this._SoTienPhaiTra = value;
    }
    get KhachHang() {
        return this._KhachHang;
    }
    set KhachHang(value) {
        this._KhachHang = value;
    }
    get ChiSoCu() {
        return this._ChiSoCu;
    }
    set ChiSoCu(value) {
        this._ChiSoCu = value;
    }
    get ChiSoMoi() {
        return this._ChiSoMoi;
    }
    set ChiSoMoi(value) {
        this._ChiSoMoi = value;
    }
}
exports.Bienlai = Bienlai;
