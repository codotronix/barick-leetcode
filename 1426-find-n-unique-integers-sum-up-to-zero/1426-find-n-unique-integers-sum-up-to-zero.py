class Solution:
    def sumZero(self, n: int) -> List[int]:
        r = []
        # if n is ODD, put 1 zero
        if n % 2 != 0:
            r.append(0)

        c = 1
        while len(r) < n:
            r.append(c)
            r.append(c * -1)
            c += 1

        return r