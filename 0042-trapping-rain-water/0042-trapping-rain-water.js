/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0,               // left wall index
        right = height.length-1 // right wall index
        l = left                  // left pointer
        r = right                 // right pointer
        water = 0
    
    while(l < r) {
        // whichever wall is smaller,
        // we will move that side's pointer
        if(height[left] < height[right]) {
            l++ 
            // this ground > left wall ?
            // then this can be new left wall
            if(height[l] > height[left]) left=l
            // else just collect the water from this low ground
            else water += height[left] - height[l]
        }
        // do the same for right wall
        else {
            r--
            // new ground higher than right wall?
            // make it new right wall then
            if(height[r] > height[right]) right = r
            // else just collect the water
            water += height[right] - height[r]
        }
    }

    return water
};