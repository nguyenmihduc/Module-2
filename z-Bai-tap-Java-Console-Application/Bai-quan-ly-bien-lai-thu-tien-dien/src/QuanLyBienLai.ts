import {Bienlai} from "./Bienlai";


export class QuanLyBienLai {
    public listBienLai: Bienlai[] = [];
    constructor() {
    }
    nhapBienLai(bienlai: Bienlai): void {
        this.listBienLai.push(bienlai)
    }
    hienThiDanhSachBienLai() {
        return this.listBienLai
    }
}