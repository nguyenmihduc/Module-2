
// interface Pair<K,V> {
//     key: K;
//     value: V;
// }
//
// let month: Pair<string, number> = {
//     key: 'jan',
//     value: 1
// }
// console.log(month)

// interface Collection<T> {
//     add(o:T): void;
//     remove(o:T): void;
// }
//
// class List<T> implements Collection<T> {
//     private items: T[] = []
//
//     constructor(items: T[]) {
//         this.items = items;
//     }
//     add(o:T) {
//         this.items.push(o);
//     }
//     remove(o: T) {
//         let index = this.items.indexOf(o)
//         if (index > -1) {
//             this.items.splice(index,1)
//         }
//     }
// }
//
// let list1 = new List<number> ([])
//
// for ( let i = 0; i < 10; i++ ) {
//     list1.add(i)
// }
// console.log(list1)
//
// list1.remove(8)
//
// console.log(list1)

