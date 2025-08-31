class Solution:
    def hammingWeight(self, n: int) -> int:
        b = bin(n)[2:] # remove the '0b' from the beginning
        c = 0
        for d in b:
            if d == '1':
                c += 1
        
        return c
        