function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
                        3
                
            2                       4

    1               6          7           8
    
19      30      21      40

35


 */

function maxHeight(root) {
    if (root === null) {
        return 0;
    }
    let leftHeight = maxHeight(root.left);
    let rightHeight = maxHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

function main() {
    let root = new Node(3);
    root.left = new Node(2);
    root.right = new Node(4)
    root.left.left = new Node(1);
    root.left.right = new Node(6);
    root.right.left = new Node(7);
    root.right.right = new Node(8);
    root.left.left.left = new Node(19);
    root.left.left.left.left = new Node(35);
    root.left.left.right = new Node(30);
    root.left.right.left = new Node(21);
    root.left.right.right = new Node(40);
    console.log("Max height of the tree is : ", maxHeight(root));
}

main();