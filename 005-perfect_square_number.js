/* eslint-disable no-mixed-operators */
function isPerfectSqBinarySearch(n) {
    let i = 0;
    let j = n;
    let mid;
    while (j - i > 1) {
        mid = i + Math.floor((j - i) / 2);
        const cur = mid * mid;
        if (cur === n) return true;
        if (cur < n) {
            i = mid;
        } else {
            j = mid;
        }
    }
    return false;
}

function isPerfectSqDivideBy2(n) {
    let half = n;
    while (half * half > n) {
        half = Math.floor(half / 2);
    }
    for (let i = half; i <= half * 2; i++) {
        if (i * i === n) return true;
    }
    return false;
}

function isPerfectSqIterationThrough(n) {
    for (let i = 1; i <= n / i; ++i) {
        if (i * i === n) return true;
    }
    return false;
}

console.log('---------binary search-------');
console.log(isPerfectSqBinarySearch(31));
console.log(isPerfectSqBinarySearch(36));
console.log(isPerfectSqBinarySearch(49));

console.log('---------divide to narrow down-------');
console.log(isPerfectSqDivideBy2(31));
console.log(isPerfectSqDivideBy2(36));
console.log(isPerfectSqDivideBy2(49));

console.log('---------loop throught sqrt(n)-------');
console.log(isPerfectSqIterationThrough(31));
console.log(isPerfectSqIterationThrough(36));
console.log(isPerfectSqIterationThrough(49));
