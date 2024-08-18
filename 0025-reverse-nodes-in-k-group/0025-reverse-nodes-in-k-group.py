# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        current = head
        count = 0
        start = head
        prevEnd = None
        nextStart = None
        newHead = None

        # loop thru the entire list once
        while current:
            count += 1
            if count == k:
                nextStart = current.next # for future
                current.next = None      # terminate the LL
                # reverse the LL part
                revStart, revEnd = self.reverseLL(start)
                # let's take care of the newHead
                if not newHead:
                    newHead = revStart
                
                # Connect it with the previous
                # Obviously 1st time prevEnd will be None
                if prevEnd:
                    prevEnd.next = revStart

                # connect it with after
                revEnd.next = nextStart

                # Update the pointer for next cycle
                prevEnd = revEnd
                start = nextStart
                count = 0
                current = nextStart
            else:
                current = current.next

        return newHead


    def reverseLL(self, head):
        current = head
        prev = None

        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next 

        # prev is the new start
        # and head is the new end
        return (prev, head)

        