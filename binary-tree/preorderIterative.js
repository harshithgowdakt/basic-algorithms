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


function preorderIterative(root) {
    let preorder = [];
    if (root === null) {
        return null;
    }

    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();

        preorder.push(node.data);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return preorder;
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

    console.log(preorderIterative(root));
}

main();