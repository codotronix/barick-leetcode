class Solution:
    def climbStairs(self, n: int) -> int:
        # with recursion DP it is very easy to me
        # I want to do it in iterative DP
        # When I tried in whiteboard it looked like a fib series
        # i.e. just add the prev 2 steps and we are done

        if n==1:
            return 1
        elif n==2:
            return 2

        a, b = 1, 2

        for i in range(3, n+1):
            c = a + b
            if i==n:
                return c
            else:
                a,b = b,c