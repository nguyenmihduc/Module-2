import {KhachHang} from "./KhachHang";

export class Bienlai {
    public _KhachHang: KhachHang;
    public _ChiSoCu: number;
    public _ChiSoMoi: number;
    private _SoTienPhaiTra: number

    constructor(KhachHang: KhachHang, ChiSoCu: number, ChiSoMoi: number, SoTienPhaiTra: number) {
        this._KhachHang = KhachHang;
        this._ChiSoCu = ChiSoCu;
        this._ChiSoMoi = ChiSoMoi;
        this._SoTienPhaiTra = SoTienPhaiTra;
    }

    get SoTienPhaiTra(): number {
        return this._SoTienPhaiTra;
    }

    set SoTienPhaiTra(value: number) {
        this._SoTienPhaiTra = value;
    }

    get KhachHang(): KhachHang {
        return this._KhachHang;
    }

    set KhachHang(value: KhachHang) {
        this._KhachHang = value;
    }

    get ChiSoCu(): number {
        return this._ChiSoCu;
    }

    set ChiSoCu(value: number) {
        this._ChiSoCu = value;
    }

    get ChiSoMoi(): number {
        return this._ChiSoMoi;
    }

    set ChiSoMoi(value: number) {
        this._ChiSoMoi = value;
    }
}