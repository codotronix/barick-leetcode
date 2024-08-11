class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        
        stack = []      # items are (index, temperature) pairs
        output = [0] * len(temperatures)    # init with 0s

        # loop thru temperatures by index
        for i, t in enumerate(temperatures):
            # we got a new temp
            # for this t, let's see 
            # how many are waiting in the stack which
            # are < t
            # stack elements are tuple of (index, temp)
            while stack != [] and stack[-1][1] < t:
                # pop the 1st less warm entry
                index, temp = stack.pop()
                dayCount = i - index
                output[index] = dayCount

            # When it's done, push in the current day
            stack.append((i, t))

        return output




