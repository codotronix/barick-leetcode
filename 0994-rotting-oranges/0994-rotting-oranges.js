/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let bads = [];
    let goodCount = 0;
    let mins = 0;

    // find the bads and goods
    for(let y=0; y<grid.length; y++) {
        for(let x=0; x<grid[0].length; x++) {
            if(grid[y][x] === 1) {
                goodCount++;
            }
            else if(grid[y][x] === 2) {
                bads.push([y,x]);
            }
        }
    }

    // no bads, only goods?
    if(!bads.length && goodCount) return -1;

    // while there goods and bads
    while(bads.length && goodCount) {
        let corruptOne = false;
        let newBads = []; 

        // loop thru the bads,
        for(let bad of bads) {
            let [y, x] = bad;

            // try up
            if((y-1) >= 0 && grid[y-1][x] === 1) {
                goodCount--;
                grid[y-1][x] = 2;
                newBads.push([y-1, x]);
                corruptOne = true;
            }
            
            // try down
            if((y+1) < grid.length && grid[y+1][x] === 1) {
                goodCount--;
                grid[y+1][x] = 2;
                newBads.push([y+1, x]);
                corruptOne = true;
            }

            // try left
            if((x-1) >= 0 && grid[y][x-1] === 1) {
                goodCount--;
                grid[y][x-1] = 2;
                newBads.push([y, x-1]);
                corruptOne = true;
            }
            
            // try right
            if((x+1) < grid[0].length && grid[y][x+1] === 1) {
                goodCount--;
                grid[y][x+1] = 2;
                newBads.push([y, x+1]);
                corruptOne = true;
            }
        }

        // could we corrupt at least 1 in this min?
        if(corruptOne) mins++;

        // no goods left?
        if(!goodCount) return mins;

        // if couldn't corrupt any new apple in this min
        // and still good left, then they are unreachable
        if(goodCount && !corruptOne) return -1;

        bads = newBads;
    }

    return mins;
};