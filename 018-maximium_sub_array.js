function maxSubArray(a) {
    let endSum = a[0];
    let curMax = a[0];

    for (let i = 1; i < a.length; i++) {
        // ignore sum of previous n-1 elements if nth element is greater than it
        endSum = Math.max(endSum + a[i], a[i]);
        curMax = Math.max(curMax, endSum);
    }
    return curMax;
}
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(input));
