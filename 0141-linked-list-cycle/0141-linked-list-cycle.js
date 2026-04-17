/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // if single node or no node at all
    if(!head || !head.next) return false;
    let slow = head;    // will move 1 step at a time
    let fast = head.next;    // will move 2 steps at a time

    while(slow && fast) {
        if(slow === fast) return true; // they meet? Circle detected
        slow = slow.next;
        if(!fast.next) break;
        fast = fast.next.next;
    }

    return false;
};