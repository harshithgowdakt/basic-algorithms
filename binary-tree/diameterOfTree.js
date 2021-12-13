function Node(data = 0) {
    if (!data) {
        throw new Error("data can't be null");
    }
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
                        3
                
            2                       4

    1               6          7           8
    
19      30      21      40

 */

let maxDiamter = Number.MIN_SAFE_INTEGER;

function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }
    let left = diameterOfBinaryTree(root.left);
    let right = diameterOfBinaryTree(root.right);
    maxDiamter = Math.max(maxDiamter, left + right);
    return Math.max(left, right) + 1;
}

function main() {
    let root = new Node(3);
    root.left = new Node(2);
    root.right = new Node(4);
    root.left.left = new Node(1);
    root.left.right = new Node(6);
    root.right.left = new Node(7);
    root.right.right = new Node(8);
    root.left.left.left = new Node(19);
    root.left.left.right = new Node(30);
    root.left.right.left = new Node(21);
    root.left.right.right = new Node(40);

    diameterOfBinaryTree(root)
    console.log(maxDiamter);
}

main();