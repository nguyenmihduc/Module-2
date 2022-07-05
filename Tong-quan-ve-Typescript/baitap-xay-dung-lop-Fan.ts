
class Fan {
    SLOW: number = 1;
    MEDIUM: number = 2;
    FAST: number = 3;
    private speed: number = 1;
    private radius: number = 5;
    private color: string = 'blue';
    private on: boolean = false;
    constructor(speed:number, radius:number, color:string, on: boolean = false ) {
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.on = on;
    }
    getterSpeed() {
        if (this.speed == 1) {
            return "SLOW"
        }
        if (this.speed == 2) {
            return "MEDIUM"
        }
        if (this.speed == 3) {
            return "FAST"
        }
    }
    getterRadius() {
        return this.radius;
    }
    getterColor() {
        return this.color;
    }
    getterOn() {
        return this.on;
    }
    setterSpeed(value: number) {
        return this.speed = value;
    }
    setterRadius(value: number) {
        return this.radius = value;
    }
    setterColor(value: string) {
        return this.color = value;
    }
    setterOn(value: boolean) {
        return this.on = value;
    }
    toString() {
        if (this.on === true) {
            return `fan is on  ${this.getterSpeed()}  ${this.getterColor()}  ${this.getterRadius()}`
        } else {
            return `fan is off  ${this.getterSpeed()}  ${this.getterColor()}  ${this.getterRadius()}`
        }
    }
}
let fan1 = new Fan(3,10,"yellow",true)
console.log(fan1.toString())

let fan2 = new Fan(2,5,"blue",false)
console.log(fan2.toString())

fan1.setterColor("pink")
console.log(fan1.getterColor())