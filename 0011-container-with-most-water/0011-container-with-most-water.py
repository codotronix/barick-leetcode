class Solution:
    def maxArea(self, height: List[int]) -> int:
        i = 0 
        j = len(height)-1 
        mx = 0
        
        while i<j:
            area = (j-i) * min(height[i], height[j])
            mx = max(mx, area)
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1
                
        return mx
        