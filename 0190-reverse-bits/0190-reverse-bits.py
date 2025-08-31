class Solution:
    def reverseBits(self, n: int) -> int:
        b = bin(n)[2:]
        # pad 0 on the left to make it 31 digit
        zeros = 31 - len(b)
        for _ in range(zeros):
            b = '0' + b
        # pad the sign bit
        # 0 for positive
        # 1 for negative
        b = ('0' + b) if (n >= 0) else ('1' + b)

        m = 1 # to hold multiples of 2
        r = 0 # to hold the result
        for d in b:
            r += int(d) * m
            m *= 2
        return r
        