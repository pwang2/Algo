function combination(n, k) {
    const solutions = [];
    (function r(prefix, start, n, k) {
        // when the numbs reached, add to solution
        if (k === 0) solutions.push(prefix.slice(0));
        // loop through the remaining and backtick
        for (let i = start; i <= n; i++) {
            prefix.push(i);
            r(prefix, i + 1, n, k - 1);
            prefix.pop();
        }
    }([], 1, n, k));
    return solutions;
}

function permutation(n) {
    const solutions = [];
    (function r(prefix, n) {
        // once length is same as the input size
        if (prefix.length === n) solutions.push(prefix.slice(0));
        // always loop through start
        for (let i = 1; i <= n; i++) {
            // make sure skip current one
            if (prefix.indexOf(i) > -1) continue;
            prefix.push(i);
            r(prefix, n);
            prefix.pop();
        }
    }([], n));
    return solutions;
}

function subsets(n) {
    const solutions = [];
    (function r(prefix, start) {
        solutions.push(prefix.slice(0));
        for (let i = start; i <= n; i++) {
            prefix.push(i);
            r(prefix, i + 1);
            prefix.pop();
        }
    }([], 1));
    return solutions;
}

function subsetFromArrayContainsDupNoReuse(nums) {
    nums.sort((a, b) => a - b);
    const solutions = [];
    (function r(prefix, start) {
        solutions.push(prefix.slice(0));
        for (let i = start; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue; // skip duplicates
            prefix.push(nums[i]);
            r(prefix, i + 1);
            prefix.pop();
        }
    }([], 0));
    return solutions;
}

function combinationSumReuse(n, t) {
    const solution = [];

    (function r(t, path, pos) {
        if (t < 0) return;
        if (t === 0) {
            solution.push(path.slice(0));
            return;
        }

        for (let i = pos; i <= n; i++) {
            path.push(i);
            r(t - i, path, i);
            path.pop();
        }
    }(t, [], 1));
    return solution;
}

function combinationSumFromArrayContainsDupNoReuse(A, t) {
    const solution = [];
    A.sort((a, b) => a - b);

    (function r(A, pos, t, path, solution) {
        const len = A.length;
        if (t < 0) return; // exit condition
        if (t === 0) {
            solution.push(path.slice(0)); // neet to push cloned path
            return;
        }
        for (let i = pos; i < len; i++) {
            if (i > pos && A[i] === A[i - 1]) continue;
            path.push(A[i]);
            r(A, i + 1, t - A[i], path, solution);
            path.pop();
        }
    }(A, 0, t, [], solution));

    return solution;
}


console.log('combination', combination(4, 2));
console.log('permutation', permutation(3));
console.log('subsets', subsets(3));
console.log('subsetFromArrayContainsDupNoReuse', subsetFromArrayContainsDupNoReuse([1, 2, 2, 3]));
console.log('combinationSumReuse', combinationSumReuse(5, 5));
console.log('combinationSumFromArrayContainsDupNoReuse', combinationSumFromArrayContainsDupNoReuse([1, 1, 3, 5, 7, 9, 6, 8], 11));
