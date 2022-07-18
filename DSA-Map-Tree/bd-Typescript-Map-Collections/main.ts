import {KeyValue} from "./KeyValue";


class Map {
    container = []

    constructor() {
    }
    set(key, value) {
        let key1 = new KeyValue(key, value)
         this.container.push(key1)
    }
    get(key) {
        for (let i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                return this.container[i]
            }
        }
        return undefined
    }
    has(key) {
        for (let i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                return true
            }
        }
        return false
    }
    delete(key) {
        for (let i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                console.log('true')
                this.container.splice(i,1)
            }
        }
        console.log('false')
    }
    size() {
        return this.container.length
    }
    clear() {
        this.container = []
    }
    showKeys() {
        this.container.forEach((item) => {
            console.log(item.key)
        })
    }
    showValue() {
        this.container.forEach((item) => {
            console.log(item.value)
        })
    }
}



let map = new Map();

map.set('1', 'abhishek');
map.set(1, 'www.codegym.vn');
map.set(true, 'bool1');
map.set('2', 'ajay');

console.table(map.container)
// console.table(map.get('2'))
// console.table(map.get(2))
// console.table(map.has(1))
// console.table(map.has(7))
// map.delete('8')
// map.clear()
// console.table(map.container)
// console.log(map.size())
map.showKeys()
map.showValue()




// console.log( "Value1= " +map.get(1)   );
// console.log("Value2= " + map.get('1') );
// console.log( "Key is Present= " +map.has(3) );
// console.log( "Size= " +map.size );
// console.log( "Delete value= " +map.delete(1) );
// console.log( "New Size= " +map.size );