const sumArr = A => A.reduce((sum, a) => sum + a, 0);
const abs = Math.abs;

function sum3closest(A, t) {
    const len = A.length;
    if (len < 3) return sumArr(A);
    A.sort((a, b) => a - b);

    let sum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len - 2; i++) {
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const curSum = A[i] + A[l] + A[r];
            if (t === curSum) return curSum;
            if (abs(t - sum) > abs(t - curSum)) {
                sum = curSum;
            }
            if (t > curSum) l++;
            else r--;
        }
    }
    return sum;
}

const input = [-1, 2, 1, -4];
const res = sum3closest(input, 1);
console.log(res);
