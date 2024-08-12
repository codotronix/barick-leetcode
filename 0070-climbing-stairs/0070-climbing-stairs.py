class Solution:
    def climbStairs(self, n: int, mem={}) -> int:
        # if n is 0, then 0 ways
        if n<=0: return 0
        # if n is 1, then only 1 way
        if n==1: return 1
        # if n is 2, then 2 ways, 2 and 1+1
        if n==2: return 2

        # at each step, we can take either 1 or 2 steps
        if n not in mem:
            mem[n] = self.climbStairs(n-1, mem) + self.climbStairs(n-2, mem)

        return mem[n]