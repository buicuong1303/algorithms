class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class SinglyLinkedListNode {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  append(value) {
    const newNode = new Node(value)
    this.size++
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
      return newNode
    }
    this.head = this.tail = newNode
    return newNode
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.size++;
    return newNode;
  }

 
  insertAt(value, index) {
    const newNode = new Node(value)
    let curr = this.head
    let pre = null
    if (index < 0 || index > this.size)
      return console.log('Please enter a valid index.')

    if (index === this.size) {
      return this.append(value)
    }
    if (index === 0) {
      return this.prepend(value)
    }
    let i = 0
    while (i < index) {
      i++
      pre = curr
      curr = curr.next
    }
    newNode.next = curr
    pre.next = newNode
  }

  insertAt2(value, index) {
    const newNode = new Node(value)
    let curr = this.head
    if (index < 0 || index > this.size)
      return console.log('Please enter a valid index.')
    this.size++

    if (index === this.size) {
      return this.append(value)
    }
    if (index === 0) {
      return this.prepend(value)
    }
    let i = 0
    while (i < index - 1) {
      i++
      curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
  }

  removeAt(index) {
    let curr = this.head
    let pre = null
    if (index < 0 || index >= this.size)
      return console.log('Please enter a valid index')
    let i = 0
    if (index === 0) return this.removeHead();
    if (index === this.size - 1) return this.removeTail();
    while (i < index) {
      i++
      pre = curr
      curr = curr.next
    }
    pre.next = curr.next
    this.size--
  }

  removeHead() {
    let curr = this.head;
    this.head = curr.next;
    this.size--;
  }

  removeTail(){
    let curr = this.head;
    let pre = null;
    while(curr.next !== null) {
      pre = curr;
      curr = curr.next;
    }
    pre.next = null
    this.tail = pre;
    this.size--;
  }

  removeElement(value) {
    let curr = this.head
    let pre = null
    while (curr != null) {
      if (curr.val === value) {
        if (pre === null) {
          this.head = curr.next
        } else {
          pre.next = curr.next
        }
        this.size--
        return curr.val
      }
      pre = curr
      curr = curr.next
    }
  }

  print() {
    let current = this.head
    while (current) {
      console.log(`(${current.val}) -> ${current.next?.val}`)
      current = current.next
    }
  }
}
let list = new SinglyLinkedListNode()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.insertAt2(0, 0)
list.insertAt(6, 6)
list.removeTail()
list.removeHead()
list.removeAt(4)
// list.removeElement(1)
list.print()
