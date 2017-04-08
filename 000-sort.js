function swap(a, x, y) {
    const t = a[x];
    a[x] = a[y];
    a[y] = t;
}

/**
 * bubbleSort: keep left side sorted
 * for each index, from the unsorted right part
 * propagate the smallest value to its index's position
 * the right to left scan stops at position i
 */
function bubbleSort(a) {
    a = a.slice();
    const len = a.length;
    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j > i; j--) {
            if (a[j] < a[j - 1]) swap(a, j, j - 1);
        }
    }
    return a;
}

/**
 * insertSort:
 * keep left sorted
 * starting from a[0], for element starts from cursor i,
 * find the correct position and insert value in t
 *
 * NOTE:
 * a[j+1]=a[j] makes a[j] always empty
 * the reason the Insert line use j+1 is:
 * a[j] already point to a smaller one
 * and a[j+1] is empty
 */
function insertSort(a) {
    a = a.slice();
    const len = a.length;
    for (let i = 1; i < len; i++) {
        const t = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > t) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = t; // Insert
    }
    return a;
}

/**
 * mergeSort:
 * split array from mid recursively till only 1 element(sorted) in array
 * merge them from bottom up,
 * and use a new array res to store the merged result.
 * res array will be merge recursively
 */
function mergeSort(a) {
    function merge(a1, a2) {
        const res = [];
        while (a1.length > 0 && a2.length > 0) {
            res.push((a1[0] <= a2[0] ? a1 : a2).shift());
        }
        return res.concat(a1).concat(a2);
    }

    function sort(a, l, r) {
        if (l === r) return [a[l]];
        const mid = (r - l) >> 1;
        return merge(sort(a, l, l + mid), sort(a, l + mid + 1, r));
    }

    a = a.slice();
    return sort(a, 0, a.length - 1);
}


/**
 * quickSort:
 * find a pivot to split array to 2 parts
 * left mid right is a sub solution
 */
function quickSort(a) {
    a = a.slice();
    const len = a.length;
    if (len < 2) return a;

    const left = [];
    const right = [];
    const mid = a[0];
    for (let i = 1; i < len; i++) {
        if (a[i] < mid) left.push(a[i]);
        else right.push(a[i]);
    }
    return [...quickSort(left), mid, ...quickSort(right)];
}

function quikrSortInplace(a) {
    function sort(a, l, r) {
        if (l >= r) return;
        const p = a[r + l >> 1];
        let i = l - 1;
        let j = r + 1;
        while (true) {
            while (a[++i] < p);
            while (a[--j] > p);
            if (i >= j) break;
            swap(a, i, j);
        }
        // console.log(i, j);
        // hard to get: if i===j, means the meet point is in position.
        // if (i === j)
        // console.log(`[ ${a.join(', ')} ]`);
        sort(a, l, i - 1);
        sort(a, j + 1, r);
    }
    a = a.slice();
    sort(a, 0, a.length - 1);
    return a;
}

const input = [19, 22, 15, 20, 14, 24, 17, 12, 25, 16, 21, 11, 10, 23, 13, 18];

const res0 = bubbleSort(input);
console.log(res0);

const res1 = insertSort(input);
console.log(res1);

const res2 = mergeSort(input);
console.log(res2);

const res3 = quickSort(input);
console.log(res3);

const res4 = quikrSortInplace(input);
console.log(res4);
