class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        sd = {}
        for a in s:
            sd[a] = sd.get(a, 0) + 1

        for a in t:
            if a not in sd or sd[a] == 0:
                return a
            sd[a] -= 1