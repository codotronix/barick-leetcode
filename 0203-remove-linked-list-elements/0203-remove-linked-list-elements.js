/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // head case
    while(head && head.val === val) {
        head = head.next;
    }
    
    if(!head) return head;

    // at this point the head is val free
    // so the nearest possible val is safely at the head.next node
    let node = head;
    while(node) {
        // val found in the next node? detach it
        if(node.next && node.next.val === val) {
            node.next = node.next.next;
        }
        // move on
        else node = node.next;
    }

    return head;
};