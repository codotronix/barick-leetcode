class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        a = b = c = None

        # find the max and put in a
        for n in nums:
            if a is None:
                a = n
            else:
                a = max(a, n)

        # find 2nd highest and put it in b
        for n in nums:
            # don't take duplicate
            if n == a:
                continue
            elif b is None:
                b = n
            else:
                b = max(b, n)

        if b is None:
            return a

        # find the 3rd highest
        for n in nums:
            if n == a or n == b:
                continue
            elif c is None:
                c = n
            else:
                c = max(c, n)

        return a if c is None else c