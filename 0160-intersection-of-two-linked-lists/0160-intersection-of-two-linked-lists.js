/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // ////////////////////////////////////////////////////////////////
    // ////// METHOD 1
    // ////////////////////////////////////////////////////////////////
    // // if they have an intersection, then they will meet 
    // // somewhere <= before tail
    // // So, if we calculate the length of both, 
    // // And then skip the first (bigLength - smallLength) no of node
    // // from the bigger LL, and then start running 1 pointer for each
    // // both the pointers should run side by side
    // let l1 = getLen(headA);
    // let l2 = getLen(headB);

    // let diffL = Math.abs(l1-l2);
    // let i = headA, j = headB;

    // // fast forward 1 pointer so that the remain lenth remain same for both
    // for(let k=1; k <= diffL; k++) {
    //     l1 > l2 ? i = i.next : j = j.next;
    // }

    // // now keep moving them side by side
    // // and check at any point if they are pointing to the same node
    // // that will be the intersecting node
    // while(i && j) {
    //     if(i === j) return i;
    //     i = i.next;
    //     j = j.next;
    // }

    // return null;

    ////////////////////////////////////////////////////////////////
    ////// METHOD 2
    ////////////////////////////////////////////////////////////////
    // Take 2 pointers and make them go thru all the nodes of both only once,
    // i.e. the 1st pointer will first move thru all the nodes
    // of LL1 and then at the end it should be placed to the beginning of LL2 
    // Similarly, the 2nd pointer will 1st go thru the entire LL2 and then 
    // at the end it should be placed at the beginning of LL1.
    // the boththe pointers should travel equal distance i.e. (m+n),
    // therefore, at the end of m+n they should meet

    let i = headA, j = headB;
    let iCrossed = false, jCrossed = false; // can cross point only once

    while(i && j) {
        if(i === j) return i;
        i = i.next;
        j = j.next;

        if(!i && !iCrossed) {
            i = headB;
            iCrossed = true;
        }
        if(!j && !jCrossed) {
            j = headA;
            jCrossed = true;
        }
    }

    return null;
};

function getLen(head) {
    let node = head;
    let l = 0;
    while(node) {
        l++;
        node = node.next;
    }

    return l;
}