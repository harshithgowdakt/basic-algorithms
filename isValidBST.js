function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
}

function insert(tree, data) {
    if (tree === null) {
        tree = new Node(data);
        return tree;
    }
    if (data < tree.data) {
        tree.left = insert(tree.left, data);
    } else {
        tree.right = insert(tree.right, data);
    }
    return tree;
}


function isValidBST(tree) {
    if (tree === null) {
        return true;
    }
    if (tree.left !== null && tree.left.data > tree.data) {
        return false;
    }
    if (tree.right !== null && tree.right.data < tree.data) {
        return false;
    }
    if (!isValidBST(tree.left) || !isValidBST(tree.right)) {
        return false
    }
    return true;
}

function main(input) {
    let Tree = null;
    for (let i = 0; i < input.length; i++) {
        Tree = insert(Tree, input[i]);
    }
    console.log(isValidBST(Tree));
}

main([2, 1, 3])