function moveL(A, l) {
    l++;
    // imprtant: compare value with known after move l
    while (A[l] === A[l - 1]) l++;
    return l;
}

function moveR(A, r) {
    r--;
    while (A[r] === A[r + 1]) r--;
    return r;
}

function sum4(A, target) {
    A.sort((a, b) => a - b);
    const solution = [];
    const n = A.length;
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && A[i] === A[i - 1]) continue;
        if (A[i] + A[i + 1] + A[i + 2] + A[i + 3] > target) break;
        if (A[i] + A[n - 3] + A[n - 2] + A[n - 1] < target) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && A[j] === A[j - 1]) continue;
            if (A[i] + A[j] + A[j + 1] + A[j + 2] > target) break;
            if (A[i] + A[j] + A[n - 2] + A[n - 1] < target) continue;
            let l = j + 1;
            let r = n - 1;
            while (l < r) {
                const sum = A[l] + A[r] + A[i] + A[j];
                if (sum < target) l = moveL(A, l);
                else if (sum > target) r = moveR(A, r);
                else {
                    solution.push([A[i], A[j], A[l], A[r]]);
                    l = moveL(A, l);
                    r = moveR(A, r);
                }
            }
        }
    }
    return solution;
}

const input = [1, 0, -1, 0, -2, 2];
const solution = sum4(input, 0);
console.log(solution);
