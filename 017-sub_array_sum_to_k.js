function longestSubArr(a, k) {
    const sum = [a[0]];
    for (let i = 1; i < a.length; i++) {
        sum[i] = sum[i - 1] + a[i];
    }
    const stats = new Map();
    stats.set(0, -1); // important
    for (let i = 0; i < a.length; i++) {
        if (!stats.has(sum[i])) {
            stats.set(sum[i], i);
        }
    }
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        const diff = sum[i] - k;
        res = Math.max((i - stats.get(diff)) || 0, res);
    }
    return res;
}
const input = [3, 1, 0, -1, 2, 1, 5];
console.log(longestSubArr(input, 3));

// 最长累加和为k的子数组等价于:
// 对于任何一个位置i，其累加和为sum[i],
// 最早出现累加和为sum[i]-k的位置
// 真TMD脑经急转弯
