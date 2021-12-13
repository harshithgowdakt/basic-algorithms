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


function levelOrder(root) {
    let levelOrder = []
    if (root === null) {
        return levelOrder;
    }

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let length = queue.length,
            level = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.data)
        }
        levelOrder.push(level);
    }
    return levelOrder;
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

    console.log(levelOrder(root));
}

main();