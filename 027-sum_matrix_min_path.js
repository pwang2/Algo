const minPathSum = function (grid) {
    const h = grid.length;
    const w = grid[0].length;
    const dp = [];
    for (let i = 0; i < h; i++) {
        dp[i] = [];
        for (let j = 0; j < w; j++) {
            if (i === 0 && j === 0) dp[i][j] = grid[i][j];
            else if (i > 0 && j === 0) dp[i][j] = dp[i - 1][0] + grid[i][j];
            else if (j > 0 && i === 0) dp[i][j] = dp[0][j - 1] + grid[i][j];
        }
    }
    for (let i = 1; i < h; i++) {
        for (let j = 1; j < w; j++) {
            dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
        }
    }
    return dp[h - 1][w - 1];
};

const grid = [
    [1, 2, 5],
    [3, 2, 1],
];
console.log(minPathSum(grid));
