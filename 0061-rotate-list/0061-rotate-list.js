/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || k === 0) return head;

    // let's 1st determine the len of the LL
    let l = 0;
    let node = head;
    while(node) {
        l++;
        node = node.next;
    }

    // we need to take last n = (k % l) nodes at the front
    // we need to do this in case k is bigger than l
    let n = k % l; 

    if(n === 0) return head; // movving 0 nodes

    let p0 = null, p1 = head, pn = p1;

    // let's find pn from the begining
    for(i=2; i<=n; i++) {
        pn = pn.next;
    }

    // now let's move p1 and pn together to find the last n nodes
    while(pn && pn.next) {
        p0 = p1;
        p1 = p1.next;
        pn = pn.next;
    }

    // now let's move p1 to pn at the front
    pn.next = head;
    head = p0.next;
    p0.next = null;

    return head;
};