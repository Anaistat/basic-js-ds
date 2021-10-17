const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  #list = null

  getUnderlyingList() {
    return this.#list
  }

  enqueue(value) {

    const node = new ListNode(value, null)
    if(this.#list == null){

      return this.#list = node
    }
    else{

      let tmp = this.#list
      while (tmp.next) {

        tmp = tmp.next;
      }
      tmp.next = node
    }
  }

  dequeue() {
    if(this.#list == null){
      return null
    }
    else{
      let listValue = this.#list.value
      this.#list = this.#list.next
      return listValue
    }
  }

}
