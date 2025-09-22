class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        m = {} # domino freq
        l = len(dominoes)
        for d in dominoes:
            mx, mn = max(d), min(d)
            if 0 <= mn <= mx < l:
                p = (mn, mx)
                m[p] = m.get(p, 0) + 1

        c = 0 # pairs count
        for v in m.values():
            if v > 1:
                c += (v * (v-1)) // 2 # doing an nC2
        
        return c

