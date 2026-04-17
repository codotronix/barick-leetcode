
var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // console.log('in get, LL = ', this.print())
    let node = this.head;
    let c = -1
    while(node !== null) {
        c++;
        if(c === index) return node.val;
        node = node.next;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(!this.head) this.head = { next: null, val }
    else this.head = { next: this.head, val }

    // console.log('After addAtHead, LL = ', this.print());
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head) return this.addAtHead(val);

    let node = this.head;
    while(node.next !== null) node = node.next;
    node.next = { val, next: null };

    // console.log('After addAtTail, LL = ', this.print());
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index === 0) {
        if(!this.head) this.head = { val, next: null };
        else this.head = { next: this.head, val };
        return;
    }
    let node = this.head;
    let c = -1;
    while(node !== null) {
        c++;
        // prev node found?
        if(c === (index-1)) {
            node.next = {
                next: node.next,
                val
            }
            break;
        }
        node = node.next;
    }

    // console.log('After addAtIndex, LL = ', this.print());
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // if head to be deleted
    if(index === 0) {
        if(this.head) this.head = this.head.next;
        return;
    }
    let node = this.head;
    let c = -1;
    while(node !== null) {
        c++;
        // prev node found?
        if(c === (index-1)) {
            // console.log('deleting=', node.next.val)
            // delete next node, if it exists
            if(node.next) node.next = node.next.next;
            break;
        }
        node = node.next;
    }
};

MyLinkedList.prototype.print = function() {
    let node = this.head;
    let vals = [];
    while(node !== null) {
        vals.push(node.val);
        node = node.next;
    }
    return vals;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */