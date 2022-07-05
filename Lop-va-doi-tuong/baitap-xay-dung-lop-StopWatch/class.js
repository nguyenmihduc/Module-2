class StopWatch {
    constructor() {
        this.startTime = Date.now()
    }
    start() {
        return this.startTime;
    }
    stop() {
        return this.endTime = Date.now()
    }
    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}
let time = new StopWatch()

time.start()

for (let i = 0; i < 1000; i++) {
    console.log("xin chao")
}
console.log(time.stop())

console.log(time.getElapsedTime())