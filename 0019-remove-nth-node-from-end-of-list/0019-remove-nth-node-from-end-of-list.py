# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # Logic -- Barick
        # take a fast and a slow pointer
        # if create a distance of N+1 between them
        # when the fast pointer reaches last node,
        # we'll know that need to remove the slow+1 node
        slow = head
        fast = head

        # both fast and slow is at 1 i.e. head
        # move fast to another n positions ahead
        # so the distance becomes N+1
        for i in range(n):
            if fast is None:
                break
            else:
                fast = fast.next

        # Out of bounds check
        if fast is None:
            # it means we need to remove the head itself
            newHead = head.next 
            head.next = None
            return newHead

        # keep fowarding both the pointers,
        # until fast moves to last node
        # because at this point slow will be at (n+1) from last
        while fast.next != None:
            slow = slow.next
            fast = fast.next

        # we need to remove slow+1 th node
        # so, connect slow with its next.next node
        nodeToRemove = slow.next
        slow.next = slow.next.next
        nodeToRemove.next = None

        return head

