/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let bads = [];
    let goods = {};
    // let visited = {};
    let mins = 0;
    // find the bads and goods
    for(let y=0; y<grid.length; y++) {
        for(let x=0; x<grid[0].length; x++) {
            if(grid[y][x] === 1) {
                goods[[y,x]] = true;
            }
            else if(grid[y][x] === 2) {
                bads.push([y,x]);
            }
        }
    }

    // no bads, only goods?
    if(!bads.length && Object.keys(goods).length) return -1;

    // loop thru the bads
    while(bads.length) {
        let corruptOne = false;
        let newBads = []; 

        for(let bad of bads) {
            let [y, x] = bad;

            // try up
            if((y-1) >= 0 && goods[[y-1, x]]) {
                delete goods[[y-1, x]];
                newBads.push([y-1, x]);
                corruptOne = true;
            }
            
            // try down
            if((y+1) < grid.length && goods[[y+1, x]]) {
                delete goods[[y+1, x]];
                newBads.push([y+1, x]);
                corruptOne = true;
            }

            // try left
            if((x-1) >= 0 && goods[[y, x-1]]) {
                delete goods[[y, x-1]];
                newBads.push([y, x-1]);
                corruptOne = true;
            }
            
            // try right
            if((x+1) < grid[0].length && goods[[y, x+1]]) {
                delete goods[[y, x+1]];
                newBads.push([y, x+1]);
                corruptOne = true;
            }
        }

        // could we corrupt at least 1 in this min?
        if(corruptOne) mins++;

        // no goods left?
        let remainingGood = Object.keys(goods).length;
        if(!remainingGood) return mins;

        // if couldn't corrupt any new apple in this min
        // and still good left, then they are unreachable
        if(remainingGood && !corruptOne) return -1;

        bads = newBads;
    }

    return mins;
};