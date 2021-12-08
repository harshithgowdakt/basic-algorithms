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

function maxSumPath(root, result) {
    if (root === null) {
        return 0;
    }

    let leftSum = maxSumPath(root.left, result);
    let rightSum = maxSumPath(root.right, result);
    let localMax = root.data + Math.max(leftSum, rightSum);
    result.maxSum = Math.max(localMax, root.data + leftSum + rightSum);
    return localMax;
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

    let result = { maxSum: Number.MIN_SAFE_INTEGER };
    maxSumPath(root, result);
    console.log("max sum path : ", result.maxSum);
}

main();