class BinarySearchTree {
  constructor(data) {
    this.nodeCount = 0;
    this.root = new BinaryTreeNode(data);
  }
  size() {
    return this.nodeCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getHeight() {
    if (!this.root) return 0;
    return 1 + this.root.height;
  }
  insert(value) {
    return this.root.insert(value);
  }
  find(value) {
    return this.root.find(value);
  }
  findMin() {
    return this.root.findMin();
  }
  remove(value) {
    return this.root.remove(value);
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
  setValue(value) {
    this.value = value;

    return this;
  }
  /**
   * @return {number}
   */
  setLeft(node) {
    // Đặt lại nút cha cho nút bên trái vì nó sẽ bị tách rời.
    if (this.left) {
      this.left.parent = null;
    }

    // Đính kèm nút mới vào bên trái.
    this.left = node;

    // Đặt nút hiện tại làm nút cha cho nút mới bên trái.
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    // Đặt lại nút cha cho nút bên phải vì nó sẽ bị tách rời.
    if (this.right) {
      this.right.parent = null;
    }

    // Đính kèm nút mới vào bên phải.
    this.right = node;

    // Đặt nút hiện tại làm nút cha cho nút mới bên phải.
    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      this.setLeft(new BinaryTreeNode(value));
    } else {
      if (this.right) {
        return this.right.insert(value);
      }
      this.setRight(new BinaryTreeNode(value));
    }
  }

  find(value) {
    if (value === this.value) return this;
    else if (value < this.value) return this.left.find(value);
    else return this.right.find(value);
  }
  findMin() {
    if (!this.left) return this;
    return this.left.findMin();
  }
  removeChild(nodeToRemove) {
    if (this.left && this.left.value === nodeToRemove.value) {
      this.left = null;
      return true;
    }

    if (this.right && this.right.value === nodeToRemove.value) {
      this.right = null;
      return true;
    }

    return false;
  }
  copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }
    if (this.left && this.left.value === nodeToReplace.value) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right.value === nodeToReplace.value) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }
  remove(value) {
    const nodeToRemove = this.find(value);
    if (!nodeToRemove) {
      throw new Error("Item not found in the tree");
    }
    const { parent } = nodeToRemove;
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (nodeToRemove.parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.value = undefined;
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const replaceNode = this.right.findMin();
      if (replaceNode.value !== nodeToRemove.right.value) {
        this.remove(replaceNode.value);
        nodeToRemove.value = replaceNode.value;
      } else {
        nodeToRemove.value = nodeToRemove.right.value;

        nodeToRemove.right.right.parent = nodeToRemove;
        nodeToRemove.right = nodeToRemove.right.right;
        // Trong trường hợp nếu giá trị nút con bên phải là giá trị lớn hơn kế tiếp
        // và nó không có con bên trái thì chỉ cần thay thế nút sắp bị xóa bằng nút con bên phải.
      }
    } else {
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        this.copyNode(childNode, nodeToRemove);
      }
    }
    nodeToRemove.parent = null;
  }
}
const tree = new BinarySearchTree(6);
tree.insert(8);
tree.insert(7);
// tree.remove(1)
// tree.remove(2)
// tree.remove(5)
// tree.remove(4)
tree.remove(6);

console.log(tree.root);
// console.log(tree.getHeight())
// console.log(tree.find(2))
