class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        m = {}
        for n in nums1:
            if n not in m:
                m[n] = True

        r = []
        for n in nums2:
            if n in m:
                r.append(n)
                del m[n]
        
        return r