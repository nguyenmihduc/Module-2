import {Node} from "./bd-linked-list";
import {LinkedList} from "./bd-linked-list";

let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(6);
let node4 = new Node(8);

let linkedList1 = new LinkedList();
linkedList1.insertFirstNode(node1);
linkedList1.insertFirstNode(node2);
linkedList1.insertFirstNode(node3);
linkedList1.insertLastNode(node4);

console.log(linkedList1)

// console.log(linkedList1.search(node3))
// console.log(linkedList1.search(9))
//
// linkedList1.deleteFirstNode()
// linkedList1.deleteLastNode()
//
// console.log(linkedList1)