import TreeNode from "./treeNode";
import BinarySearchTree from "./binarySearchTreeImpl";

const rootNode = new TreeNode(30);

rootNode.left = new TreeNode(15);
rootNode.right = new TreeNode(45);

const newBinarySearchTree = new BinarySearchTree(rootNode);

// Insert
newBinarySearchTree.insert(rootNode, 10);
newBinarySearchTree.insert(rootNode, 38);
newBinarySearchTree.insert(rootNode, 60);

// Traversal
// newBinarySearchTree.inorder(rootNode);
// newBinarySearchTree.preorder(rootNode);
// newBinarySearchTree.postorder(rootNode);

const res = newBinarySearchTree.search(rootNode, 70);