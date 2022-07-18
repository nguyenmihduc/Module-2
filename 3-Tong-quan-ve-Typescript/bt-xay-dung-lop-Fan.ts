
enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST,
}
class Fan {
    private speed: number = 1;
    private radius: number = 5;
    private color: string = 'blue';
    private on: boolean = false;
    constructor(speed:Speed, radius:number, color:string, on: boolean = false ) {
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.on = on;
    }
    getterSpeed() {
        return this.speed;
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
let fan1 = new Fan(Speed.FAST,10,"yellow",true)
console.log(fan1.toString())

let fan2 = new Fan(Speed.MEDIUM,5,"blue",false)
console.log(fan2.toString())

fan1.setterColor("pink")
console.log(fan1.getterColor())