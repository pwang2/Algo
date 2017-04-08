function sum3(A, t) {
    const answer = [];
    const len = A.length;
    A.sort((a, b) => a - b);

    for (let i = 0; i < len - 2; i++) {
        // here, we need to compare current one to previous one
        // we may have the same number in array multilpe times,
        // we may use it multiple times
        while (i > 0 && A[i] === A[i - 1]) i++;

        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = A[i] + A[l] + A[r];
            if (sum === t) {
                answer.push([A[i], A[l], A[r]]);
                while (A[r--] === A[r]);
                while (A[l++] === A[l]);
            } else if (sum > t) {
                while (A[r--] === A[r]);
            } else {
                while (A[l++] === A[l]);
            }
        }
    }
    console.log(answer);
}
const input = [1, 3, 5, -2, 6, -2, 7, 2, -7, -1, 0, -3, 3, 0, 4, 1];
console.log(input);
sum3(input, 0);
