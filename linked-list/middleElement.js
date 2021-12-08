function Node(data) {
    if (!data) {
        throw new Error("data can't be null");
    }
    this.data = data;
    this.next = null;
}



function main() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
}