"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhachHang = void 0;
class KhachHang {
    constructor(HotenChuHo, SoNha, MaSoCongTo) {
        this._HotenChuHo = HotenChuHo;
        this._SoNha = SoNha;
        this._MaSoCongTo = MaSoCongTo;
    }
    static MaSoCongTo() {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lengthMaSo = 4;
        let randomMaSo = '';
        for (let i = lengthMaSo; i > 0; i--) {
            randomMaSo += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomMaSo;
    }
    get HotenChuHo() {
        return this._HotenChuHo;
    }
    set HotenChuHo(value) {
        this._HotenChuHo = value;
    }
    get SoNha() {
        return this._SoNha;
    }
    set SoNha(value) {
        this._SoNha = value;
    }
    get MaSoCongTo() {
        return this._MaSoCongTo;
    }
    set MaSoCongTo(value) {
        this._MaSoCongTo = value;
    }
}
exports.KhachHang = KhachHang;
