
let time = new StopWatch()

time.start()

for (let i = 0; i < 1000; i++) {
    console.log("xin chao")
}
console.log(time.stop())

console.log(time.getElapsedTime())