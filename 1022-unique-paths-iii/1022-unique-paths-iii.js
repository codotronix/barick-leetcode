/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    // let's find the starting square first
    let x0=0, y0=0, movableCells=0

    for(let y=0; y<grid.length; ++y) {
        for(let x=0; x<grid[0].length; ++x) {
            // start found?
            if(grid[y][x] === 1) {
                y0=y
                x0=x
            }
            // movableCell ?
            if(grid[y][x] !== -1) movableCells++
        }
    }

    // from start it should branch out in 4 directions
    const startCell = y0 + '-' + x0
    let currentPath = { [startCell]: true }
    return findUniqPaths(grid, y0-1, x0, {...currentPath}, movableCells, 1)
            + findUniqPaths(grid, y0+1, x0, {...currentPath}, movableCells, 1)
            + findUniqPaths(grid, y0, x0-1, {...currentPath}, movableCells, 1)
            + findUniqPaths(grid, y0, x0+1, {...currentPath}, movableCells, 1)

};


function findUniqPaths(grid, nextY, nextX, currentPath, movableCells, runningCount) {
    // out of bounds check
    if(nextY<0 || nextY>=grid.length || nextX<0 || nextX>=grid[0].length) return 0
    // Obstacle?
    if(grid[nextY][nextX] === -1) return 0
    // reached?
    // the path is unique ?
    // AND it has touched all the empty squares?
    if(grid[nextY][nextX] === 2) 
    {   
        if(runningCount+1 === movableCells) {
            // console.log('1----------------------------------')
            // console.log('nextY=',nextY, ', nextX=', nextX)
            // console.log(currentPath)
            return 1
        }
        else return 0
    }

    // already visited path?
    const nextCell = nextY + '-' + nextX
    if(nextCell in currentPath) return 0

    // add this cell to the current path
    currentPath = {
        ...currentPath,
        [nextCell]: true
    }

    return findUniqPaths(grid, nextY-1, nextX, {...currentPath}, movableCells, runningCount+1)
            + findUniqPaths(grid, nextY+1, nextX, {...currentPath}, movableCells, runningCount+1)
            + findUniqPaths(grid, nextY, nextX-1, {...currentPath}, movableCells, runningCount+1)
            + findUniqPaths(grid, nextY, nextX+1, {...currentPath}, movableCells, runningCount+1)
}