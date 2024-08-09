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

        // p1 and p2 will be equal only iff ---
        // either intersection point is found...
        // OR
        // they are both of equal length and both reached null (i.e. no intersection)
        while (p1 != p2) {
            p1 = p1 != null ? p1.next : headB;
            p2 = p2 != null ? p2.next : headA;
        }

        // if they match it's p1==p2 or both are null (no intersection)
        return p1;
    }
}