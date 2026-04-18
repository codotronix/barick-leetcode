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

 /**
 thinking --->
 the node after j should come after i, that's all
 
 1,2,3,4,5,6,7,8,9
 i,j
 1,3,2,4,5,6,7,8,9
   i   j
 1,3,5,2,4,6,7,8,9
     i     j
so each time i and j just point to the new-next node
  */
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let i = head;
    let j = head.next;
    while(i && j && j.next) {
        // take out the node after j
        // and place it after i
        let temp = j.next;
        j.next = j.next.next;
        temp.next = i.next;
        i.next = temp;

        // move i, j 1 step to their NEW next nodes,
        i = i.next;
        j = j.next;
    }

    return head;
};