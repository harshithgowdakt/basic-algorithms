function Node(data) {
    this.data = data;
    this.next = null;
}


function reverse(head) {
    let previous = null, current = head, next = null;
    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
}

function main() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head = reverse(head);
    console.log(JSON.stringify(head));
}

main()