class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        for i in range(n+1):
            r = 4 ** i
            if r == n:
                return True
            elif r > n:
                break
        return False