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
var List = /** @class */ (function () {
    function List(items) {
        this.items = [];
        this.items = items;
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list1 = new List([]);
for (var i = 0; i < 10; i++) {
    list1.add(i);
}
console.log(list1);
list1.remove(8);
console.log(list1);
