/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        //
        // O(1) SPACE LOGIC EXPLAINED -- Suman Barick
        //
        // There is an interesting observation.
        // If we write down all the elements of List A
        // and then all the elements of list B
        // for this merged list (A + B)
        // if the intersection node appears at index x,
        // It will be the same for (B + A)

        // So, by this logic, we will have 2 pointers,
        // p1 will traverse through (A + B)
        // and p2 will traverse through
        ListNode p1 = headA;
        ListNode p2 = headB;

        Boolean p1Switched = false;
        Boolean p2Switched = false;

        // since (A+B) is of same length of (B+A)
        // does not matter which pointer we check for termination
        while (p1 != null && p2 != null) {
            // match/intersection found? break
            if(p1 == p2) {
                break;
            }
            // else move on
            p1 = p1.next;
            p2 = p2.next;

            // both of them cannot be null at the SAME time if they have intersection
            // end reached for any of them?
            // start with the next 
            if(p1 == null && !p1Switched) {
                p1 = headB;
                p1Switched = true;
            }
            if(p2 == null && !p2Switched) {
                p2 = headA;
                p2Switched = true;
            }
        }

        return p1;
    }
}