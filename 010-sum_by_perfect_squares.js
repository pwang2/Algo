// https://leetcode.com/problems/perfect-squares/#/description
function minimalToSum(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = n;
        let j = 1;
        let jsq = 1;
        while (jsq <= i) {
            dp[i] = Math.min(dp[i], dp[i - jsq] + 1);
            j++;
            jsq = j * j;
        }
    }
    return dp.pop();
}

console.log(minimalToSum(1345));
