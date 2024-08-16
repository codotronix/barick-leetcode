"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head is None:
            return None
        
        # Barick: My implementation from Hints:
        # Interweaving pattern
        # Create a new LL copy of the old LL
        # but, the new will be interweaved in the old,
        # like, oldNode1 -> newNode1 -> oldNode2 -> newNode2 and so on...
        # so, the random node of any newNode1 will be 
        # it oldNode1.randomeNode.next and so on...
        
        # Let's create the interweaved New LL first
        current = head
        while current is not None:
            newNode = Node(current.val, current.next)
            current.next = newNode
            current = newNode.next


        # Once the interweaving is complete
        # loop thru the old nodes
        # Point the randomNodes properly, 
        # currently it is set to None for each newNode
        current = head
        while current is not None:
            # thanks to our interweaving patetrn
            # the old random nodes will also point to the new ones
            
            # but what if a random is pointing to null ?
            # ignore it
            if current.random is not None:
                current.next.random = current.random.next

            # move to next old node
            current = current.next.next

        # Next
        # De-interweave
        h = head.next   # head of new LL
        c = h           # new current
        while c.next is not None:
            c.next = c.next.next
            c = c.next

        return h