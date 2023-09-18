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
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return null
    if(!list1) return list2
    if(!list2) return list1
    
    // init
    let h = null    // head of result
    let p = null    // current pointer of result
    let l1 = list1  // list1 current pointer
    let l2 = list2 // list2 current pointer
    
    // while both the lists have values
    while(l1 !== null && l2 !== null) {
        // pick the smaller node
        // and create a new node
        let newNode = null
        if(l1.val <= l2.val) {
            newNode = new ListNode(l1.val, null)
            l1 = l1.next
        }
        else {
            newNode = new ListNode(l2.val, null)
            l2 = l2.next
        }
        
        // create head, if head is empty
        if(h === null) h = newNode
        
        // if p is not empty, link this
        if(p !== null) p.next = newNode
        
        // mark this as new p
        p = newNode
    }
    
    // any left overs in l1?
    if(l1 !== null) p.next = l1
    
    // any left overs in l2
    if(l2 !== null) p.next = l2
    
    return h
    
};