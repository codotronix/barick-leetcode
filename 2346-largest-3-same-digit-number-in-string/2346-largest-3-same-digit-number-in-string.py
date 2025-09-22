class Solution:
    def largestGoodInteger(self, num: str) -> str:
        mx = None
        for i in range(2, len(num)):
            if num[i] == num[i-1] == num[i-2]:
                if mx is None:
                    mx = num[i]
                else:
                    mx = max(mx, num[i])

        return '' if mx is None else str(mx)*3
