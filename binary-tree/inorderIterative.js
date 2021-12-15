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


function inorderIterative(root) {
    let inorder = [];
    if (root === null) {
        return inorder;
    }

    let stack = [];
    let node = root;
    while (true) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) break;
            node = stack.pop();
            inorder.push(node.data);
            node = node.right;
        }
    }
    return inorder;
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

    console.log(inorderIterative(root));
}

main();