/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, current = null;
    let c = 0; // c=carry
    // as long as either one is there
    while(l1 || l2) {
        let s = c;  // start with the carry
        if(l1) {
            s += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            s += l2.val;
            l2 = l2.next;
        }

        // extract the value and the carry
        c = Math.floor(s / 10);
        let val = s % 10;

        const newNode = new ListNode(val, null);

        // if not head, create head with this one
        if(!head) head = newNode;

        // if prev current was present
        if(current) {
            current.next = newNode;
        }

        // mark this as new current node
        current = newNode;
    }

    // if a non zero carry still exists
    if(c) current.next = new ListNode(c, null);

    return head;
};