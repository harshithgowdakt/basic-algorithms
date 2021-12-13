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
    
19      30      21      40

 */

let maxLevel = Number.MIN_SAFE_INTEGER;

function leftViewOfTree(root, level, leftView = []) {
    if (root === null) {
        return;
    }
    if (level > maxLevel) {
        leftView.push(root.data);
        maxLevel = level;
    }
    leftViewOfTree(root.left, level + 1, leftView);
    leftViewOfTree(root.right, level + 1, leftView);
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
    let leftView = [];
    leftViewOfTree(root, 1, leftView);
    console.log(leftView);
}

main()