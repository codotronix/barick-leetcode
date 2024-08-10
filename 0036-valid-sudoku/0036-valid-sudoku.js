/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // let's create map of maps for each of the 9 columns, 9 rows and 9 squares
    let rowMaps = {}
    let colMaps = {}
    let squareMaps = {}

    for(let y = 0; y < 9; ++y) {
        for(let x = 0; x < 9; ++x) {
            let n = board[y][x]

            // ignore if blank
            if(n === '.') continue

            // to find which of the 9 squares it belongs, 
            // we can do x // 3, y // 3, 
            // so squares would be like 
            // 0_0, 0_1, 0_2 ,, 
            // 1_0, 1_1, 1_2 ,, 
            // 2_0, 2_1, 2_2
            const squareKey = Math.floor(y / 3) + '_' + Math.floor(x / 3)

            // 1st time for this row ?
            if(!rowMaps[y]) rowMaps[y] = {}

            // 1st time for this col ?
            if(!colMaps[x]) colMaps[x] = {}

            // 1st time for this square
            if(!squareMaps[squareKey]) squareMaps[squareKey] = {}

            // Dupicate ? was it already see in its row, col or square?
            if(rowMaps[y][n] || colMaps[x][n] || squareMaps[squareKey][n]) return false

            // push it in map
            rowMaps[y][n] = true
            colMaps[x][n] = true
            squareMaps[squareKey][n] = true
        }
    }

    return true
};