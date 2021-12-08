function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
}


function isValidBST(root, startRange, endRange) {
    if (root === null)
        return true;

    if (root.data < startRange || root.data > endRange)
        return false;

    if (isValidBST(root.left, startRange, root.data) && isValidBST(root.right, root.data, endRange))
        return true;

    return false;
}

function main() {
    let root = new Node(8);
    root.left = new Node(5);
    root.left.right = new Node(6);
    root.left.left = new Node(4);
    root.left.left.left = new Node(3);
    root.left.right.right = new Node(7);
    root.right = new Node(20);
    root.right.left = new Node(18);
    root.right.right = new Node(22);
    root.right.left.left = new Node(15);
    root.right.left.right = new Node(19);
    console.log("Is binary tree valid BST", isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
}

main()