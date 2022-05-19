class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.pre = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value){
    this.size++;
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.pre = this.tail;
      this.tail = newNode;
      return newNode
    }
    this.head = this.tail = newNode;
    return newNode
  }
  insertAt(value, index) {
    if ( index < 0 || index > this.size) console.log('Please enter a valid index');

    this.size++
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode
    } else {
      let i = 0;
      let curr = this.head;
      while( i < index - 1) {
        i++;
        curr = curr.next;
      }
      const nextNode = curr.next;

      newNode.next = nextNode;
      newNode.pre = curr;
    
      curr.next = newNode;
      nextNode.pre = newNode;
    }
  }
  remove(value) {
    let i = 0
    let curr = this.head;
    while (curr.val !== value) {
      i++;
      curr = curr.next;
    };
    this.size--;
    if (i === 0 ) {
      const curr = this.head
      this.head = curr.next;
      this.head.pre = null;
      return;
    }
    const nextNode = curr.next;
    const preNode = curr.pre;
    preNode.next = nextNode;
    nextNode.pre = preNode;
  }
  print() {
    let current = this.head;
    while(current) {
      console.log(
        `${current.pre?.val} <-(${current.val}) -> ${current.next?.val}`
      );
      current = current.next
    }
  }
}

const ddl = new DoublyLinkedList();
ddl.append(3);
// ddl.append(4);
// ddl.append(5);
// ddl.append(6);
// ddl.remove(3);
ddl.print();
// console.log(ddl)
// ddl.print()