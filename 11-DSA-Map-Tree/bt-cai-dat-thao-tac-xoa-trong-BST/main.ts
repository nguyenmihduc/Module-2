import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree<number>();

tree.insert(6)
tree.insert(5)
tree.insert(7)
tree.insert(3)
tree.insert(4)
tree.insert(9)
tree.insert(2)
tree.insert(99)

console.log(`The numbers of nodes ${tree.totalNode}`)
tree.inOder(tree.root)