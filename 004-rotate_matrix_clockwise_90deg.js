/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    /* eslint-disable no-param-reassign, no-continue */
    const n = matrix.length;
    matrix = matrix.reverse();
    let tmp;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i === j) continue;
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
}

const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
rotate(m);
console.log(m.forEach(n => console.log(n)));
