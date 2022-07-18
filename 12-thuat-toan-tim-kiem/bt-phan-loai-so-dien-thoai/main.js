var Viettel = [];
var Vinaphone = [];
var Mobifone = [];
function phoneNumberClassification(phoneNumber) {
    var First3Digits = phoneNumber.substring(0, 3);
    console.log(First3Digits);
    switch (First3Digits) {
        case ('098'):
            Viettel.push(phoneNumber);
            break;
        case ('091'):
            Vinaphone.push(phoneNumber);
            break;
        case ('090'):
            Mobifone.push(phoneNumber);
            break;
        default:
            throw "khong thuoc nha mang";
    }
}
phoneNumberClassification('0982534135');
phoneNumberClassification('0902534138');
phoneNumberClassification('0912534139');
phoneNumberClassification('0912534132');
phoneNumberClassification('0902534133');
phoneNumberClassification('0982534131');
console.log(Viettel);
console.log(Vinaphone);
console.log(Mobifone);
