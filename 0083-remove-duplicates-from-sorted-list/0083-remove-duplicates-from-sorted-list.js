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

/*
    My Simple O(n) solution
    Edited the list in place
    Time: 58 ms (74.39%), Space: 44.4 MB (23.7%)
*/
var deleteDuplicates = function(head) {
    if(!head) return head
    
    let p = head    // p is the last uniq node
    let q = p       // q is the traversing node

    while(q !== null) {
        // new value found?
        if(q.val !== p.val) {
            // p.next should point to this new uniq node
            p.next = q
            // make q as new p
            p = q
        }

        // in any case, move q
        q = q.next
    }

    // we are done
    p.next = null

    return head
};
