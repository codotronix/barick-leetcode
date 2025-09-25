class Solution:
    def minimumTotal(self, triangle: List[List[int]], y=0, x=0, m=None) -> int:
        if m is None:
            m={}
        
        # if index out of bound
        # Bad Path
        if y > (len(triangle) - 1) or x > (len(triangle[y]) - 1):
            print('inside bad path')
            return float('inf')

        # last row reached
        if y == (len(triangle) - 1):
            print('returning ', triangle[y][x])
            return triangle[y][x]
        
        # use memoization
        if (y,x) not in m:
            print('standing at ', triangle[y][x])
            m[(y,x)] = triangle[y][x] + min(self.minimumTotal(triangle, y+1, x, m), self.minimumTotal(triangle, y+1, x+1, m))

        return m[(y,x)]

        # return triangle[y][x] + min(self.minimumTotal(triangle, y+1, x, m), self.minimumTotal(triangle, y+1, x+1, m))

        