import {LinkedList} from "./classLinkedList";
import {Node} from "./classNode";

// let node1 = new Node("A")
// let node2 = new Node("B")
// let node3 = new Node("C")
// let node4 = new Node("D")
// let node5 = new Node("E")

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
// linkedList.insertFirstNode(node1)
// linkedList.insertFirstNode(node2)
// linkedList.insertFirstNode(node3)
// linkedList.insertFirstNode(node4)
// linkedList.insertFirstNode(node5)

console.log(linkedList.getSize())
console.log(linkedList.readList())

// console.log(linkedList)