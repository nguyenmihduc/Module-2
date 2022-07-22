
import {IpRegex} from "./ipReGex";

let ipRegex = new IpRegex();

console.log(ipRegex.validate('192.168.111.444'))
console.log(ipRegex.validate('1921.168.111.44'))
console.log(ipRegex.validate('192.1682.111.444'))
console.log(ipRegex.validate('192.168.1113.444'))
console.log(ipRegex.validate('192.168.111.4444'))

console.log(ipRegex.validate('192a.168.111.444'))
console.log(ipRegex.validate('192.168b.111.444'))
console.log(ipRegex.validate('192.168.111c.444'))
console.log(ipRegex.validate('192.168.111.444d'))