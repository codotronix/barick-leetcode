/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let's take 2 pointers at p1 and pn,
    // they are in relative position of nth to each other
    // let's keep forwarding them together, their distance remaining const
    // when pn reaches end, we need to delete the p1, 
    // (and to do that we need to keep track of p0 also) 
    let p1 = head, p0 = null, pn = p1;

    // forward pn to (n-1) steps
    for(let i=1; i < n; i++) pn = pn.next;

    // at this point they are nth node from each other
    while(pn) {
        // if pn is last node
        // p1 needs to be removed
        if(!pn.next) {
            // Careful if it's the head
            // at this point p0 is null, 
            // as there is no node before head
            if(p1 === head) head = head.next;
            else p0.next = p1.next; // DONE!!!
        }

        // right shift each
        pn = pn.next;
        p0 = p1;
        p1 = p1.next;
    }

    return head;
};