import {Circle} from "./classCircle";
import {Comparable} from "./interFaceComparable";

export class ComparableCircle extends Circle implements Comparable {

    constructor(radius: number) {
        super(radius);
    }

    comparableTo(o: ComparableCircle): number {
        if (this.getRadius() > o.getRadius()) {
            return  1
        } else if (this.getRadius() < o.getRadius()) {
            return -1
        } else {
            return 1;
        }
    }
}

