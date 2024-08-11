class MinStack:

    def __init__(self):
        self.stack = []
        # let's also have a parallel stack to hold
        # the minimum value so far
        self.minStack = [] 

    def push(self, val: int) -> None:
        self.stack.append(val)
        # calculate the new minimum
        # is it something that was already there or this new value.
        # Also note, if it was already there, then popping this new value
        # should not have affected that one also
        minSoFar = val if self.minStack == [] else min(val, self.minStack[-1])
        self.minStack.append(minSoFar)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()