"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inOder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inOder(node.left);
            }
            if (node.right) {
                this.inOder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode_1.TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
