/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        // This is the famous The Rabbit and The Tortoise problem
        // The rabbit moves 2 step at a time
        // The tortoise moves 1 step at a time
        // If they race in a linear path R will never meet T again
        // But if the path is circular, then definitely R will meet T again
        ListNode r = head, t = head; // initially both Rabbit and Tortoise is on first node

        // check r.next also since Rabbit moves 2 step at a time
        while(t != null && r != null && r.next != null) {
            // tortoise takes a step
            t = t.next;

            // rabbit takes 2 steps
            r = r.next.next;

            // if they meet but not in null, cycle found
            if(r != null && r == t) return true;
        }

        // null found, hence no cycle
        return false;
    }
}