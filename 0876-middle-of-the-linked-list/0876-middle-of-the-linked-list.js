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
var middleNode = function(head) {
    let node = head;
    let c = -1; // total node indices
    while(node) {
        c++;
        node = node.next;
    }

    const midIndex = Math.ceil(c / 2);
    node = head;
    c = -1; // total node indices
    while(node) {
        c++;
        if(c === midIndex) return node;
        node = node.next;
    }
};