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


function verticalOrderTraversal(root) {
    let verticalOrder = {}, queue = [];
    if (root === null) {
        return verticalOrder;
    }

    queue.push({ node: root, level: 0 })
    while (queue.length > 0) {
        let { node, level } = queue.shift();

        if (!verticalOrder[level]) {
            verticalOrder[level] = []
        }
        verticalOrder[level].push(node.data);

        if (node.left) {
            queue.push({ node: node.left, level: level - 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, level: level + 1 });
        }
    }
    return verticalOrder;
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

    console.log(verticalOrderTraversal(root));
}

main();