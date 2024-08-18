# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # Edge cases
        if lists == []:
            return None
        elif len(lists) == 1:
            # case of [[]]
            if lists[0] == []:
                return None
            return lists[0]

        res = []
        # take 2 at a time and merge
        for i in range(0, len(lists), 2):
            l1 = lists[i]
            l2 = lists[i+1] if (i+1) < len(lists) else None
            res.append(self.merge2SortedLists(l1, l2))

        # Keep recurring until only 1 list left
        # At which point the initial condition will break out
        return self.mergeKLists(res)


    # Helper method 2 merge 2 sorted lists into one
    def merge2SortedLists(self, l1, l2):
        c1, c2 = l1, l2     # traversing pointers
        head = prev = None

        # while none of them is None
        while c1 and c2:
            # create a new node
            newNode = None
            if c1.val < c2.val:
                newNode = ListNode(c1.val)
                c1 = c1.next
            else:
                newNode = ListNode(c2.val)
                c2 = c2.next
            
            # first time, no head, no prev
            if not head:
                head = prev = newNode
            else:
                prev.next = newNode
                prev = newNode

        # anything left in LL1 ?
        while c1:
            newNode = ListNode(c1.val)
            c1 = c1.next
            # first time, no head, no prev
            if not head:
                head = prev = newNode
            else:
                prev.next = newNode
                prev = newNode
            

        # anything left in LL2 ?
        while c2:
            newNode = ListNode(c2.val)
            c2 = c2.next
            # first time, no head, no prev
            if not head:
                head = prev = newNode
            else:
                prev.next = newNode
                prev = newNode

        return head


        