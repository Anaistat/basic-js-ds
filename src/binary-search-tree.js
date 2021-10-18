const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  #root = null

  root() {
    return this.#root
  }

  add(data) {
    let newNode = new Node(data)

    if(this.#root == null){
      this.#root = newNode
    }
    else{
      this.insertNode(this.#root, newNode)
    }
  }

  insertNode(node, newNode){
    if(newNode.data < node.data){
      if(node.left == null) node.left = newNode
      else this.insertNode(node.left, newNode)
    }
    else{
      if(node.right == null) node.right = newNode
      else this.insertNode(node.right, newNode)
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    if(!this.#root) return null

    let curr = this.#root
    let found = null
    while(curr && !found){
      if(data < curr.data){
        curr = curr.left
      }
      else if(data > curr.data){
        curr = curr.right
      }
      else{
        found = curr
      }
    }
    if(!found) return null
    return found
  }

  remove(data) {
  this.#root = this.removeNode(this.#root, data)
  }

  findMinNode(node){
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  removeNode(node, key){
    if(node == null) return null

    else if(key < node.data){
      node.left = this.removeNode(node.left, key)
      return node
    }
    else if(key > node.data){
      node.right = this.removeNode(node.right, key)
      return node
    }

    else{
      if(node.left == null && node.right == null){
        node = null
        return node
      }
      if(node.left == null){
        node = node.right
        return node
      }
      else if(node.right == null){
        node = node.left
        return node
      }
      let min = this.findMinNode(node.right)
      node.data = min.data

      node.right = this.removeNode(node.right, min.data)
      return node
    }

  }

  min() {
    if(this.#root == null) return null

    let currNode = this.#root
    while(currNode.left != null){
      currNode = currNode.left
    }
    return currNode.data
  }

  max() {
    if(this.#root == null) return null

    let currNode = this.#root
    while(currNode.right != null){
      currNode = currNode.right
    }
    return currNode.data
  }

}