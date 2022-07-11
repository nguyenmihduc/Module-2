import {ComparableCircle} from "./classComparableCircle";

let circles = []

circles[0] = new ComparableCircle(5)
circles[1] = new ComparableCircle(10)
circles[2] = new ComparableCircle(15)

let result = circles[0].comparableTo(circles[1])
if (result == 1) {
    console .log('The current circle is larger')
} else {
    console.log('The current circle is Smaller')
}


