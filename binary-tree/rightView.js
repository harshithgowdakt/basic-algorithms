function Node(data) {
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
    
19      30      21      40                   75

                                                83

 */

let maxLevel = Number.MIN_SAFE_INTEGER;

function rightViewOfTree(root, level, rightView = []) {
    if (root === null) {
        return;
    }
    if (level > maxLevel) {
        rightView.push(root.data);
        maxLevel = level;
    }
    rightViewOfTree(root.right, level + 1, rightView);
    rightViewOfTree(root.left, level + 1, rightView);
    return null;
}

function main() {
    let root = new Node(3);
    root.left = new Node(2);
    root.right = new Node(4)
    root.left.left = new Node(1);
    root.left.right = new Node(6);
    root.right.left = new Node(7);
    root.right.right = new Node(8);
    root.right.right.right = new Node(75);
    root.right.right.right.right = new Node(83);
    root.left.left.left = new Node(19);
    root.left.left.right = new Node(30);
    root.left.right.left = new Node(21);
    root.left.right.right = new Node(40);
    let rightView = [];
    rightViewOfTree(root, 1, rightView);
    console.log(rightView);
}

main()