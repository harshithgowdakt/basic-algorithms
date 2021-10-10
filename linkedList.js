function Node(key) {
    this.key = key;
    this.next = null;
}

function List() {
    this.head = null;
    this.length = 0;
}

List.prototype.insertAtBegining = function (key) {
    if (key === null || key === undefined) {
        throw new Error("require key");
    }
    let newNode = new Node(key);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

List.prototype.insertAtEnd = function (key) {
    if (key === null || key === undefined) {
        throw new Error("require key");
    }
    if (this.head !== null) {
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        let new_node = new Node(key);
        temp.next = new_node;
    } else {
        this.head = new Node(key);
    }
    this.length++;
}

List.prototype.insertAtPostion = function (key, position) {
    if (position > this.length) {
        throw new Error("position is greater than list length");
    }
    let newNode = new Node(key);
    if (position !== 0) {
        let temp = this.head;
        let count = 1;
        while (count < position) {
            count++;
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}

List.prototype.print = function () {
    let temphead = this.head;
    let list = "";
    while (temphead !== null) {
        list += `${temphead.key} -> `
        temphead = temphead.next;
    }
    list += `null`;
    console.log(list);
}

List.prototype.deleteAtEnd = function () {
    if (this.head !== null) {
        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null;
    } else {
        this.head = null;
    }
    this.length--;
}

List.prototype.deleteAtBegining = function () {
    if (this.head !== null) {
        this.head = this.head.next;
        this.length--;
    }
}

function main() {
    //insert at the begining
    let list = new List();
    list.insertAtBegining(1);
    list.insertAtBegining(2);
    list.insertAtBegining(3);
    list.insertAtBegining(4);
    list.insertAtBegining(5);
    console.log("First list");
    list.print();
    console.log(`length ${list.length}`);

    //insert at end
    let list2 = new List();
    list2.insertAtEnd(1);
    list2.insertAtEnd(2);
    list2.insertAtEnd(3);
    list2.insertAtEnd(4);
    list2.insertAtEnd(5);
    console.log("second list");
    console.log(`length ${list2.length}`);

    //insert at position
    list2.insertAtPostion(10, 5);
    list2.print();

    //insert at position
    let list3 = new List();
    list3.insertAtPostion(1, 0);
    list3.print();

    //delete at the end;
    list.deleteAtEnd();
    console.log("First list");
    list.print();

    //delete at the begining
    let list4 = new List();
    list4.insertAtBegining(1);
    list4.deleteAtBegining();
}

main();