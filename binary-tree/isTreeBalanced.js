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
**/

function isTreeBalanced(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = isTreeBalanced(root.left);
    let rightHeight = isTreeBalanced(root.right);

    let diff = Math.abs(leftHeight - rightHeight);

    if (leftHeight === -1 || rightHeight === -1 || diff > 1) {
        return -1;
    }
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
    root.left.left.right = new Node(30);
    root.left.right.left = new Node(21);
    root.left.right.right = new Node(40);
    // root.left.right.left.left = new Node(23); UNCOMMENT to make it unbalanced tree
    // root.left.right.left.left.left = new Node(27);
    
    if (isTreeBalanced(root) >= 0) {
        console.log("tree is balanced");
    } else {
        console.log("tree is not balanced");
    }
}

main();