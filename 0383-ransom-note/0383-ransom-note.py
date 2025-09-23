class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        m = {}
        # create a dict of magazine
        for a in magazine:
            m[a] = m.get(a, 0) + 1

        for a in ransomNote:
            if a not in m or m[a] == 0:
                return False
            else:
                m[a] -= 1

        return True