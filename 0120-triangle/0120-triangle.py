class Solution:
    # LESSON: do not initialize a dict on any object 
    # in python as default params, as they gets reused 
    # with all the function calls, even on repeated test cases
    def minimumTotal(self, triangle: List[List[int]], y=0, x=0, m=None) -> int:
        if m is None:
            m={}
        
        # if index out of bound
        # Bad Path
        if y > (len(triangle) - 1) or x > (len(triangle[y]) - 1):
            return float('inf')

        # last row reached
        if y == (len(triangle) - 1):
            return triangle[y][x]
        
        # use memoization
        if (y,x) not in m:
            m[(y,x)] = triangle[y][x] + min(self.minimumTotal(triangle, y+1, x, m), self.minimumTotal(triangle, y+1, x+1, m))

        return m[(y,x)]

        