import TreeNode from "./treeNode";

class BinarySearchTree {
    public head: TreeNode | null;

    constructor(head?: TreeNode) {
        this.head = head || null;
    }

    search(node: TreeNode | null = this.head, value: number): TreeNode | null {
        let temp = node;

        if (temp === null) {
            return null;
        } else if (value === temp.data) {
            return temp;
        } else if (value < temp.data) {
            return this.search(temp.left, value);
        } else {
            return this.search(temp.right, value);
        }
    }

    insert(node: TreeNode | null = this.head, value: number): TreeNode {
        if (node === null) {
            const rootNode = new TreeNode(value);
            return rootNode;
        } else {
            if (value < node.data) {
                node.left = this.insert(node.left, value);
            } else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    }

    inorder(root: TreeNode | null = this.head): void {
        let temp = root;

        if (root !== null) {
            this.inorder(temp?.left);
            console.log(temp?.data);
            this.inorder(temp?.right);
        }
        return;
    }

    preorder(root: TreeNode | null = this.head): void {
        let temp = root;

        if (root !== null) {
            console.log(temp?.data);
            this.inorder(temp?.left);
            this.inorder(temp?.right);
        }
        return;
    }

    postorder(root: TreeNode | null = this.head): void {
        let temp = root;

        if (root !== null) {
            this.inorder(temp?.left);
            this.inorder(temp?.right);
            console.log(temp?.data);
        }
        return;
    }

}

export default BinarySearchTree;