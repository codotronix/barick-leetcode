/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0, y=0
    for(let m of moves) {
        if(m === 'U') y--
        else if(m === 'D') y++
        else if(m === 'L') x--
        else if(m === 'R') x++
    }

    if(x===0 && y===0) return true
    else return false
};