
export class KhachHang {
    public _HotenChuHo: string;
    public _SoNha: string;
    public _MaSoCongTo: string;

    constructor(HotenChuHo: string, SoNha: string, MaSoCongTo: string) {
        this._HotenChuHo = HotenChuHo;
        this._SoNha = SoNha;
        this._MaSoCongTo = MaSoCongTo;
    }

    static MaSoCongTo() {
            let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let lengthMaSo = 4;
            let randomMaSo  = ''
            for (let i = lengthMaSo; i > 0; i--) {
                randomMaSo += chars[Math.floor(Math.random() * chars.length)]
            }
            return randomMaSo;
        }

    get HotenChuHo(): string {
        return this._HotenChuHo;
    }

    set HotenChuHo(value: string) {
        this._HotenChuHo = value;
    }

    get SoNha(): string {
        return this._SoNha;
    }

    set SoNha(value: string) {
        this._SoNha = value;
    }

    get MaSoCongTo(): string {
        return this._MaSoCongTo;
    }

    set MaSoCongTo(value: string) {
        this._MaSoCongTo = value;
    }
}