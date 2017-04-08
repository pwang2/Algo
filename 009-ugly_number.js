function nthUglyNumber(n) {
    const dp = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    let o2 = 2;
    let o3 = 3;
    let o5 = 5;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(...[o2, o3, o5]);
        if (dp[i] === o2) o2 = dp[++i2] * 2;
        if (dp[i] === o3) o3 = dp[++i3] * 3;
        if (dp[i] === o5) o5 = dp[++i5] * 5;
    }
    return dp[n - 1];
}

console.log(nthUglyNumber(150));
