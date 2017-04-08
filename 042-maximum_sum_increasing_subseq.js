/**
 * max sum increasing seq:
 * for every position i,
 * for every position before i starting from 0,
 * if the trending is increasing, sum it and add it to lookup table.
 *
 *
 * @returns {undefined}
 */
function maxSeq(arr) {
    let i;
    let j;
    let max = 0;
    const dp = [];
    const n = arr.length;

    /* Initializedp values for all indexes */
    for (i = 0; i < n; i++) dp[i] = arr[i];

    /* Compute maximum sum values in bottom up manner */
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                max = Math.max(max, dp[i]);
            }
        }
        console.log('dp till ', i, ' is ', dp[i]);
    }
    return max;
}

const input = [1, 0, 101, 3, 2, 4, 100, 4, 5];
const result = maxSeq(input);
console.log(result);

/*
 * i=0
    dp[0]=1

i=1
    j=0, given 101>1 && 101 < 1 + 101               => dp[1] = dp[0]+101 = 102

i=2
    j=0, given A[2]>A[j] && dp[2] < dp[0] + A[2]    => dp[2] = dp[0] + A[2]=3
      j=1, given A[2]>A[j]                            => dp[2] not update,

i=3
    j=0，given A[3]>A[0] && dp[3] < dp[0] + A[3]    => dp[3] = dp[0] + A[3] = 4
    j=1, given A[3]<A[1]                            => dp[2] not update
    j=2, given A[3]>A[2] && dp[3]<  dp[2] + A[3]    => dp[3] = dp[2] + A[3]

    对于任何一个位置i, 对于前面的各个位置x， 如果A[x] < A[i] and dp[x]+A[i]>dp[i], 更新dp[i]
*/
