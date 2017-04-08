function helper(A, pos, t, path, solution) {
    const len = A.length;
    if (pos === len || t < 0) return; // exit condition
    if (t === 0) {
        solution.push(path.slice(0)); // neet to push cloned path
        return;
    }
    for (let i = pos; i < len; i++) {
        path.push(A[i]);
        helper(A, i, t - A[i], path, solution);
        path.pop();
    }
}

function sumCombination(A, t) {
    const solution = [];
    helper(A, 0, t, [], solution);
    return solution;
}

const input = [1, 2, 4, 5, 3, 6, 8];
const solution = sumCombination(input, 10);
console.log(solution);
