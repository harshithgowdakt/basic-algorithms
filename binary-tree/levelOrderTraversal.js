function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}


function levelOrder(root, level, result) {
    if (root == null) return;
    if (!result[level]) {
        result[level] = [];
    }
    result[level].push(root.data);
    levelOrder(root.left, level + 1, result);
    levelOrder(root.right, level + 1, result);
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
    root.left.right.left = new Node(19);
    root.left.right.right = new Node(40);
    let result = [];
    levelOrder(root, 0, result);
    for (let i = 0; i < result.length; i++) {
        if ((i % 2) !== 0) {
            result[i] = result[i].reverse()
        }
    }
    console.log(result);
}

main();