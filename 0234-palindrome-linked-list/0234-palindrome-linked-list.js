/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // a single or no node is plaindrome
    if(!head || !head.next) return true;
    // let's first convert the LL to a DLL
    let prev = null;
    let current = head;
    let nodeCount = 0;
    while(current) {
        nodeCount++;
        current.prev = prev;
        prev = current;
        current = current.next;
    }

    const tail = prev;
    let i=head, j=tail, mid = nodeCount/2;
    for(let c=1; c<=mid; c++) {
        if(i.val !== j.val) return false;

        i = i.next;
        j = j.prev;
    }

    return true;
};