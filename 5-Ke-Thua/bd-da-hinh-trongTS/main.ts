
class Box {

    length: number;

    width: number;

    height: number;

    constructor( length: number,  width: number,  height: number) {

        this.height = height;

        this.length = length;

        this.width = width;

    }

    volume() : number {

        return this.length*this.width*this.height;

    }

}
class BoxWeight extends Box {

    length: number;

    width: number;

    height: number;

    depth: number;

    constructor( length: number,  width: number,  height: number, depth: number) {

        super(length, width, height);

        this.depth = depth;

    }
    volume() : number {

        return super.volume()*this.depth;

    }

}


let boxObj: Box = new BoxWeight(10, 20, 30, 40);
console.log(boxObj.volume())