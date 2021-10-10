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
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
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
        if (this.head.next != null) {
            let temp = this.head;
            while (temp.next != null && temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null;
        } else {
            this.head = null;
        }
        this.length--;
    }
}

List.prototype.deleteAtBegining = function () {
    if (this.head !== null) {
        this.head = this.head.next;
        this.length--;
    }
}

List.prototype.find = function (key) {
    if (this.head !== null) {
        let temp = this.head;
        while (temp != null) {
            if (temp.key === key) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    return false;
}

function main() {
    //insert at the begining
    console.log("List 1 : insert at the beging example");
    let list1 = new List();
    list1.insertAtBegining(1);
    list1.insertAtBegining(2);
    list1.insertAtBegining(3);
    list1.insertAtBegining(1);
    list1.insertAtBegining(4);
    list1.insertAtBegining(5);
    list1.print();

    //insert at end
    console.log("List 2 : insert at the end example");
    let list2 = new List();
    list2.insertAtEnd(1);
    list2.insertAtEnd(2);
    list2.insertAtEnd(3);
    list2.insertAtEnd(4);
    list2.insertAtEnd(5);
    list2.print();

    //insert at position
    console.log("List2 : insert at specific position example");
    list2.insertAtPostion(10, 3);
    list2.print();

    //insert at position
    let list3 = new List();
    console.log("List3 : insert at specific position example");
    list3.insertAtPostion(1, 0);
    list3.print();

    //delete at the begining
    console.log("List 4 : delete at the begining example");
    let list4 = new List();
    list4.insertAtEnd(1);
    list4.insertAtEnd(2);
    list4.insertAtEnd(3);
    list4.insertAtEnd(4);
    list4.insertAtEnd(5);
    list4.insertAtEnd(6);
    list4.insertAtEnd(7);
    list4.insertAtEnd(8);
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();
    list4.deleteAtBegining();
    list4.print();

    //delete at the begining
    console.log("List 5 : delete at the end example");
    let list5 = new List();
    list5.insertAtEnd(1);
    list5.insertAtEnd(2);
    list5.insertAtEnd(3);
    list5.insertAtEnd(4);
    list5.insertAtEnd(5);
    list5.insertAtEnd(6);
    list5.insertAtEnd(7);
    list5.insertAtEnd(8);
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();
    list5.deleteAtEnd();
    list5.print();

    console.log("List 6 : find an element example");
    let list6 = new List();
    list6.insertAtEnd(1);
    list6.insertAtEnd(2);
    list6.insertAtEnd(3);
    list6.insertAtEnd(4);
    list6.insertAtEnd(5);
    list6.insertAtEnd(6);
    list6.insertAtEnd(7);
    list6.insertAtEnd(8);
    console.log(list6.find(8));
}

main();