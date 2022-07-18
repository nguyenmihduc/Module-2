"use strict";
exports.__esModule = true;
var bd_linked_list_1 = require("./bd-linked-list");
var bd_linked_list_2 = require("./bd-linked-list");
var node1 = new bd_linked_list_1.Node(2);
var node2 = new bd_linked_list_1.Node(4);
var node3 = new bd_linked_list_1.Node(6);
var node4 = new bd_linked_list_1.Node(8);
var linkedList1 = new bd_linked_list_2.LinkedList();
linkedList1.insertFirstNode(node1);
linkedList1.insertFirstNode(node2);
linkedList1.insertFirstNode(node3);
linkedList1.insertLastNode(node4);
console.log(linkedList1);
// console.log(linkedList1.search(node3))
// console.log(linkedList1.search(9))
//
// linkedList1.deleteFirstNode()
// linkedList1.deleteLastNode()
//
// console.log(linkedList1)
