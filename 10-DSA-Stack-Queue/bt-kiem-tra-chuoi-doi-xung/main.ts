import {CheckSymmetry} from "./Check";

let checkSymmetry1 =new CheckSymmetry('able was I ere I saw elba')
checkSymmetry1.check()

let checkSymmetry2 =new CheckSymmetry('able was I ere I saw')
checkSymmetry2.check()

let checkSymmetry3 =new CheckSymmetry('1hgf23a32fgh1')
checkSymmetry3.check()

let checkSymmetry4 =new CheckSymmetry('a')
checkSymmetry4.check()