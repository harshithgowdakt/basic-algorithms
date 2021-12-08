function Node(data) {
    if (!data) {
        throw new Error("data can't be null");
    }
    this.data = data;
    this.next = null;
}

function middleElement(head) {
    let slowPointer = head, fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer && fastPointer.data == slowPointer.data) {
            return true;
        }
    }
    return false;
}

function main() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    console.log("has loop", middleElement(head));
}
main()