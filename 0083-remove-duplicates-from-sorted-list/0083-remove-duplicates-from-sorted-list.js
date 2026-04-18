/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let node = head;

    while(node) {
        // if the next node is a duplicate,
        // remove it standing here
        if(node.next && node.next.val === node.val) {
            node.next = node.next.next;
        }
        // else move forward
        else node = node.next;
    }

    return head;
};