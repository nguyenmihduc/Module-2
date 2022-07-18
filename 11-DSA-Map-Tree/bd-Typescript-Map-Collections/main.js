"use strict";
exports.__esModule = true;
var KeyValue_1 = require("./KeyValue");
var Map = /** @class */ (function () {
    function Map() {
        this.container = [];
    }
    Map.prototype.set = function (key, value) {
        this.key1 = new KeyValue_1.KeyValue(key, value);
        this.container.push(this.key1);
    };
    Map.prototype.get = function (key) {
        for (var i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                return this.container[i];
            }
        }
        return undefined;
    };
    Map.prototype.has = function (key) {
        for (var i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                return true;
            }
        }
        return false;
    };
    Map.prototype["delete"] = function (key) {
        for (var i = 0; i < this.container.length; i++) {
            if (key === this.container[i].key) {
                console.log('true');
                this.container.splice(i, 1);
            }
        }
        console.log('false');
    };
    Map.prototype.size = function () {
        return this.container.length;
    };
    Map.prototype.clear = function () {
        this.container = [];
    };
    Map.prototype.showKeys = function () {
        this.container.forEach(function (item) {
            console.log(item.key);
        });
    };
    Map.prototype.showValue = function () {
        this.container.forEach(function (item) {
            console.log(item.value);
        });
    };
    return Map;
}());
var map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.codegym.vn');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.table(map.container);
// console.table(map.get('2'))
// console.table(map.get(2))
// console.table(map.has(1))
// console.table(map.has(7))
// map.delete('8')
// map.clear()
// console.table(map.container)
// console.log(map.size())
map.showKeys();
map.showValue();
// console.log( "Value1= " +map.get(1)   );
// console.log("Value2= " + map.get('1') );
// console.log( "Key is Present= " +map.has(3) );
// console.log( "Size= " +map.size );
// console.log( "Delete value= " +map.delete(1) );
// console.log( "New Size= " +map.size );
