# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # let's take a fast pointer and a slow pointer
        # to reach the middle node
        slow, fast = head, head

        # see if enough node is available to move the fast pointer
        while fast.next is not None and fast.next.next is not None:
            fast = fast.next.next
            slow = slow.next

        # Now, let's declare slow.next as a new LL
        head2 = slow.next
        slow.next = None

        # Now we have 2 LLs
        # LL1 is the original LL upto its half length
        # LL2 is the half+1 to end of the original LL

        # Now let's reverse LL2
        current = head2
        prev = None
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next

        head2 = prev

        # Now that LL2 has benn reversed, 
        # Go thru both LL1 and LL2
        # And stitch together
        c1 = head
        c2 = head2
        while c1 is not None and c2 is not None:
            c1_next = c1.next
            c2_next = c2.next
            c1.next = c2
            c2.next = c1_next
            c1 = c1_next
            c2 = c2_next