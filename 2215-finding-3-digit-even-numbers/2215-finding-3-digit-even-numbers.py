class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        l = len(digits)
        r = set()
        for i in range(l):
            if digits[i] == 0:
                continue
            for j in range(l):
                if j == i:
                    continue
                for k in range(l):
                    if k == j or k == i or digits[k] % 2 != 0:
                        continue
                    n = digits[i] * 100 + digits[j] * 10 + digits[k]
                    r.add(n)
        
        return sorted(r)