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

 */

function inorder(root, inoderResult) {
    if (root === null) {
        return;
    }
    inorder(root.left, inoderResult);
    inoderResult.push(root.data);
    inorder(root.right, inoderResult);
}


function preorder(root, preorderResult) {
    if (root === null) {
        return;
    }
    preorderResult.push(root.data);
    preorder(root.left, preorderResult);
    preorder(root.right, preorderResult);
}

function postorder(root, postorderResult) {
    if (root === null) {
        return;
    }
    postorder(root.left, postorderResult);
    postorder(root.right, postorderResult);
    postorderResult.push(root.data);
}

function main() {
    let root = new Node(3);
    root.left = new Node(2);
    root.right = new Node(4)
    root.left.left = new Node(1);
    root.left.right = new Node(6);
    root.right.left = new Node(7);
    root.right.right = new Node(8);
    
    let preorderResult = [], postorderResult = [], inoderResult = [];
    preorder(root, preorderResult);
    inorder(root, inoderResult);
    postorder(root, postorderResult);

    console.log("inorder : ", inoderResult);
    console.log("preorder : ", preorderResult);
    console.log("postorder : ", postorderResult);
}

main();