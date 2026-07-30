/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function isValid(row, col, ch) {
        for (let i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] === ch) return false;

            // Check column
            if (board[i][col] === ch) return false;

            // Check 3x3 box
            const r = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const c = 3 * Math.floor(col / 3) + (i % 3);

            if (board[r][c] === ch) return false;
        }
        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] === '.') {

                    for (let ch = 1; ch <= 9; ch++) {
                        let digit = ch.toString();

                        if (isValid(row, col, digit)) {
                            board[row][col] = digit;

                            if (solve()) return true;

                            board[row][col] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    solve();
};
