function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function invert(root) {
    if (root === null)
        return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invert(root.left);
    invert(root.right);
}


function main() {
    let root = new Node(8);
    root.left = new Node(5);
    root.left.right = new Node(6);
    root.left.left = new Node(4);
    root.left.left.left = new Node(3);
    root.left.right.right = new Node(7);
    root.right = new Node(20);
    root.right.left = new Node(18);
    root.right.right = new Node(22);
    root.right.left.left = new Node(15);
    root.right.left.right = new Node(19);
    invert(root)
    console.log(JSON.stringify(root));
}

main()