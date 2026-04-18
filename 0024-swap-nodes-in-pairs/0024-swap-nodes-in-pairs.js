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
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let i = head, prev = null;

    while(i && i.next) {
        let j = i.next;

        i.next = j.next;
        j.next = i;

        // for head
        if(!prev) head = j;
        else prev.next = j;

        prev = i;
        i = i.next;
    }

    return head;
};