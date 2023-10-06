class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        # Let's find the start index
        # also, find the total cells one can move into
        y0 = 0
        x0 = 0
        OPEN_CELLS = 0

        for y in range(len(grid)):
            for x in range(len(grid[0])):
                # start cell found?
                if grid[y][x] == 1:
                    y0 = y
                    x0 = x

                # open cell?
                if grid[y][x] != -1:
                    OPEN_CELLS += 1

        # Add this path to the journey
        key = f"{y0}-{x0}"
        currentPath = {
            key: True
        }
        print('OPEN_CELLS=', OPEN_CELLS)
        return self.findPath(grid, y0-1, x0, currentPath.copy(), OPEN_CELLS, 1) \
        + self.findPath(grid, y0+1, x0, currentPath.copy(), OPEN_CELLS, 1) \
        + self.findPath(grid, y0, x0-1, currentPath.copy(), OPEN_CELLS, 1) \
        + self.findPath(grid, y0, x0+1, currentPath.copy(), OPEN_CELLS, 1)

    

    def findPath(self, grid, nextY, nextX, currentPath, OPEN_CELLS, pathLen):
        # check for out of bounds
        if nextY<0 or nextY>=len(grid) or nextX<0 or nextX>=len(grid[0]):
            return 0
        
        # Obstacle?
        if grid[nextY][nextX] == -1:
            return 0

        key = f"{nextY}-{nextX}"
        # cell already visited?
        if key in currentPath:
            return 0
        
        # destination reached?
        if grid[nextY][nextX] == 2:
            # all cells travelled?
            # count it as a SUCESS
            if pathLen+1 == OPEN_CELLS:
                return 1
            else:
                return 0

        # all other cases
        # add this cell to current path
        currentPath[key] = True

        return self.findPath(grid, nextY-1, nextX, currentPath.copy(), OPEN_CELLS, pathLen+1)   \
        + self.findPath(grid, nextY+1, nextX, currentPath.copy(), OPEN_CELLS, pathLen+1) \
        + self.findPath(grid, nextY, nextX-1, currentPath.copy(), OPEN_CELLS, pathLen+1) \
        + self.findPath(grid, nextY, nextX+1, currentPath.copy(), OPEN_CELLS, pathLen+1)
        