function maximumGap(input) {
    const len = input.length;
    if (len < 2) return 0;

    const maxInEachBucket = Array.from(new Array(len), () => Number.MIN_SAFE_INTEGER);
    const minInEachBucket = Array.from(new Array(len), () => Number.MAX_SAFE_INTEGER);

    const max = Math.max(...input);
    const min = Math.min(...input);
    const range = (max + 1 - min) / len;

    for (let i = 0; i < len; i++) {
        const index = Math.floor((input[i] - min) / range);
        maxInEachBucket[index] = Math.max(maxInEachBucket[index], input[i]);
        minInEachBucket[index] = Math.min(minInEachBucket[index], input[i]);
    }

    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < len; i++) {
        if (maxInEachBucket[i] === Number.MIN_SAFE_INTEGER) {
            maxInEachBucket[i] = maxInEachBucket[i - 1];
            minInEachBucket[i] = minInEachBucket[i - 1];
        }
        res = Math.max(res, minInEachBucket[i] - maxInEachBucket[i - 1]);
    }
    return res;
}

const input = [1, 10000000];
const result = maximumGap(input);
console.log(result);
