class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.pre = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  append(value) {
    this.size++
    const newNode = new Node(value)
    if (this.tail) {
      this.tail.next = newNode
      newNode.pre = this.tail
      this.tail = newNode
      return newNode
    }
    this.head = this.tail = newNode
    return newNode
  }
  prepend(value) {
    this.size++
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.pre = newNode
    this.head = newNode
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size)
      console.log('Please enter a valid index')

    const newNode = new Node(value)
    if (index === 0) {
      this.prepend(value)
    } else if (index === this.size) {
      this.append(value)
    } else {
      let i = 0
      let curr = this.head
      while (i < index - 1) {
        i++
        curr = curr.next
      }
      const nextNode = curr.next

      newNode.next = nextNode
      newNode.pre = curr

      curr.next = newNode
      nextNode.pre = newNode
      this.size++
    }
  }
  remove(value) {
    let i = 0
    let curr = this.head
    while (curr.val !== value) {
      i++
      curr = curr.next
    }
    if (i === 0) {
      return this.removeHead()
    }

    preNode.next =  curr.next
    nextNode.pre = curr.pre
    this.size--

  }
  removeHead(){
    const current = this.head;
    this.head = current.next;
    this.head.pre = null
    this.size--;
  }
  removeTail(){
    this.tail= this.tail.pre;
    this.tail.next = null;
    this.size--
  }
  removeAt(index){
    let curr = this.head
    if (index < 0 || index >= this.size)
      return console.log('Please enter a valid index')

    if (index === 0) {
      return this.removeHead();
    } else if (index === this.size - 1) {
      return this.removeTail();
    } else {
      let i = 0
      while (i < index) {
        i++;
        curr = curr.next;
      }
  
      pre.next = curr.next;
      next.pre = curr.pre;
      this.size--;
    }
 
  }
  print() {
    let current = this.head
    while (current) {
      console.log(
        `${current.pre?.val} <- (${current.val}) -> ${current.next?.val}`,
      )
      current = current.next
    }
  }
}

const ddl = new DoublyLinkedList()
ddl.append(3)
// ddl.append(3)
ddl.prepend(2)
// ddl.insertAt(2, 0)
ddl.insertAt(1, 0)
// ddl.insertAt(4, 1)
// ddl.removeHead()
ddl.removeAt(2)
// ddl.removeTail()
// ddl.append(4);
// ddl.append(5);
// ddl.append(6);
// ddl.remove(3);
ddl.print()
// console.log(ddl)
// ddl.print()
