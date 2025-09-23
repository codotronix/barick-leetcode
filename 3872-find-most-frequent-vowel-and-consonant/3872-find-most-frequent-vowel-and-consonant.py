class Solution:
    def maxFreqSum(self, s: str) -> int:
        v = { x: 0 for x in 'aeiou' }
        c = { 'b': 0 }

        for a in s:
            # if a is a vowel
            if a in v:
                v[a] += 1
            # else a consonant
            else:
                c[a] = c.get(a, 0) + 1

        return max(v.values()) + max(c.values())
        