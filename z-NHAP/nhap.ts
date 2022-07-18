// let arrayA: number[] = [1,3,6,2,7,8,33,66,8,2,121,46,6,8,]
// let arrayB: number[] = [1,6,2,76,211,66,3,24,8,]
// let newArray: number[] = []
//
// // for (let i = 0; i < arrayA.length; i++) {
// //     arrayB.forEach((item,index) => {
// //         if (item === arrayA[i]) {
// //             newArray.push(item)
// //         }
// //     })
// // }
//
// for (let i = 0; i < arrayA.length; i++) {
//     for (let j = 0; j < arrayB.length; j++) {
//         if (arrayB[j] === arrayA[i]) {
//             newArray.push(arrayB[j])
//         }
//     }
// }
//
// console.log(newArray)

export class  Stack {
    container: any = []
    constructor() {
    }
    push(item): void {
        this.container.push(item)
    }
    pope() {
        let x = this.container.push("a")
        let y = this.container.push("c")
        let l = this.container.push("c")
        let k = this.container.push("c")
        let p = this.container.push("c")
        for (let i = 1; i < 3; i++) {if (this.container.pop() === this.container.pop()) {
            console.log('hahaha')
        } else {
            console.log('huhuhu')
        }}

        // return this.container.pop()
    }
    size(): number {
        return this.container.length
    }
    // ctrlZ(stack) {
    //     stack.push(this.pop())
    // }
    // ctrlShiftZ(stack) {
    //     this.container.push(stack.pop())
    // }

}

let stack1 = new Stack()
let stack2 = new Stack()

// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)

stack1.pope()
console.log(stack1)

// console.log(stack1)
// stack1.ctrlZ(stack2)
// stack1.ctrlZ(stack2)
//
//
// console.log(stack1)
// console.log(stack2)
//
// stack1.ctrlShiftZ(stack2)
// stack1.ctrlShiftZ(stack2)
//
// console.log(stack1)
// console.log(stack2)
//
// stack2.ctrlShiftZ(stack1)
// stack2.ctrlShiftZ(stack1)
// stack2.ctrlShiftZ(stack1)
//
// console.log(stack1)
// console.log(stack2)


