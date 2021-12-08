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

function leastCommonAncestor(root, node1, node2) {
    if (root === null ||
        root.data === node1 ||
        root.data === node2) {
        return root;
    }

    let left = leastCommonAncestor(root.left, node1, node2);
    let right = leastCommonAncestor(root.right, node1, node2);
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }
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
    root.left.left.left = new Node(19);
    root.left.left.right = new Node(30);
    root.left.right.left = new Node(21);
    root.left.right.right = new Node(40);
    let lca = leastCommonAncestor(root, 30, 6);
    if (lca) {
        console.log("least common ancestor is : ", lca.data);
    } else {
        console.log("least common ancestor not found for given nodes");
    }
}

main();