
// list

function linkedList() {
    this.head = null;
    this.tail = null;
}

// nodes
function node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

linkedList.prototype.addNode = function (v) {
    var newNode = new node(v, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}
