/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    let i = l1, j = l2, prev = null;

    // let's merge everything back in list1
    while(i && j) {
        // if j.val <= i.val
        // put this j node before this i node
        if(j.val <= i.val) {
            let temp = j;
            j = j.next;

            // if i is the head
            if(i === l1) {
                temp.next = i
                l1 = temp;
                prev = temp;
            }
            else {
                temp.next = i;
                prev.next = temp;
                prev = temp;
            }
        }
        // else i is smaller
        else {
            prev = i;
            i = i.next;
        }
    }

    // if i has finished and still some j left
    // attach that partial list to the prev
    if(j) prev.next = j;

    return l1;
};