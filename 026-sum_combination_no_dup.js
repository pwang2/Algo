function helper(A, pos, t, path, solution) {
    const len = A.length;
    if (t < 0) return; // exit condition
    if (t === 0) {
        solution.push(path.slice(0)); // neet to push cloned path
        return;
    }
    for (let i = pos; i < len; i++) {
        if (i > pos && A[i] === A[i - 1]) continue; // need to be bigger than pos
        path.push(A[i]);
        helper(A, i + 1, t - A[i], path, solution);
        path.pop();
    }
}

function sumCombination(A, t) {
    const solution = [];
    A.sort((a, b) => a - b); // need this to dedup
    helper(A, 0, t, [], solution);
    return solution;
}

const input = [1, 2, 4, 5, 3, 6, 8];
const solution = sumCombination(input, 10);
console.log(solution);
