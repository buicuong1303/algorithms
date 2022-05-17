class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class SinglyLinkedListNode {
  constructor() {
    this.head = new Node(0);
  }
   append(value) {
    const newNode = new Node(value);
    let tail = this.head
    while(tail.next !== null){
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head
  }
}
let list = new SinglyLinkedListNode()
list.append(3)
list.append(4)
list.append(5)
console.log(JSON.stringify(list.head.next))
