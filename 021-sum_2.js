function sum2(A, t) {
    A.sort((a, b) => a - b);
    const answer = [];
    const o = [];
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i + 1] === A[i]) i++;
        if (o[A[i]] !== undefined) answer.push([A[o[A[i]]], A[i]]);
        else o[t - A[i]] = i;
    }
    return answer;
}

const input = [1, 3, 4, 1, -3, -1, 5, 2, 1];
const res = sum2(input, 2);
console.log(res);

// if we need to dedup, sorte the array first
// if the current number is the same as the previous one,
// skip it
