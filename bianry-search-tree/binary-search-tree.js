class BinarySearchTree {
  constructor(data) {
    this.nodeCount = 0;
    this.root = new BinaryTreeNode(data)
  }
  size() {
    return this.nodeCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getHeight() {
    if (!this.root) return 0;
    return 1 + this.root.height
  }
  insert(value) {
    return this.root.insert(value)
  }
  find(value) {
    return this.root.find(value)
  }
}
class BinaryTreeNode {
  /**
   * @param {*} [value] - giá trị của nút.
   */
  constructor(value = null) {
      this.left = null;
      this.right = null;
      this.parent = null;
      this.value = value;

      // Mọi thông tin bên ngoài liên quan đến nút đều có thể được lưu trữ tại đây.
      // this.meta = new HashTable();

      // Bộ so sánh được sử dụng để so sánh các nút trong cây nhị phân với nhau.
      // this.nodeComparator = new Comparator();
  }

  /**
   * @return {number}
   */
  get leftHeight() {
      if (!this.left) {
          return 0;
      }

      return this.left.height + 1;
  }

  /**
   * @return {number}
   */
  get rightHeight() {
      if (!this.right) {
          return 0;
      }
      return this.right.height + 1;
  }

  /**
   * @return {number}
   */
  get height() {
      return Math.max(this.leftHeight, this.rightHeight);
  }

  /**
   * @return {number}
   */
  insert(value) {
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value)
      }
      this.left = new BinaryTreeNode(value);
      return;
    }
     else {
       if (this.right) {
         return this.right.insert(value);
       }
       this.right = new BinaryTreeNode(value);
       return;

     }
  }
  find(value) {
    if (value === this.value) return this;
    else if (value < this.value) return this.left.find(value);
    else return this.right.find(value)
  }
}
const tree = new BinarySearchTree(3);
tree.insert(4)
tree.insert(2)
tree.insert(1)

console.log(tree.root)
console.log(tree.getHeight())
console.log(tree.find(2))