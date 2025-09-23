class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        m = {}
        r = []
        for n in nums1:
            m[n] = m.get(n, 0) + 1

        for n in nums2:
            if n in m and m[n] > 0:
                r.append(n) 
                m[n] -= 1

        return r
