function nativeSort(a) {
    a.sort((a, b) => a - b);
    return a;
}

function quickSort(a) {
    function swap(a, x, y) {
        const t = a[x];
        a[x] = a[y];
        a[y] = t;
    }

    function sort(a, l, r) {
        if (l >= r) return;
        const mid = a[(l + r) >> 1];
        let i = l - 1;
        let j = r + 1;
        while (true) {
            while (a[++i] < mid);
            while (a[--j] > mid);
            if (i >= j) break;
            swap(a, i, j);
        }
        sort(a, l, i - 1);
        sort(a, j + 1, r);
    }
    sort(a, 0, a.length - 1);
    return a;
}

function mergeSort(a) {
    function merge(a1, a2) {
        const res = [];
        let i = 0;
        let j = 0;
        const len1 = a1.length;
        const len2 = a2.length;
        while (i < len1 && j < len2) {
            if (a1[i] < a2[j]) res[res.length] = a1[i++];
            else res[res.length] = a2[j++];
        }
        for (let m = i; m < len1; m++) res[res.length] = a1[m];
        for (let m = j; m < len2; m++) res[res.length] = a2[m];
        return res;
    }

    function msort(a, l, r) {
        if (l === r) return [a[l]];
        const mid = (r + l) >> 1;
        return merge(msort(a, l, mid), msort(a, mid + 1, r));
    }

    return msort(a, 0, a.length - 1);
}

const input = Array.from(new Array(1000), (n, i) => i).map(n => Math.floor(n * Math.random()));
const res1 = quickSort(input.slice());
const res2 = nativeSort(input.slice());
const res3 = mergeSort(input.slice());
let d = true;
for (let i = 0; i < 1000; i++) d = d && res1[i] === res2[i] && res2[i] === res3[i];
console.log(d);

// pre-heat
for (let i = 0; i < 100; i++) quickSort(input.slice());
for (let i = 0; i < 100; i++) nativeSort(input.slice());
for (let i = 0; i < 100; i++) mergeSort(input.slice());

console.time('quick sort');
for (let i = 0; i < 10000; i++) quickSort(input.slice());
console.timeEnd('quick sort');

console.time('merge sort');
for (let i = 0; i < 10000; i++) mergeSort(input.slice());
console.timeEnd('merge sort');

console.time('native sort');
for (let i = 0; i < 10000; i++) nativeSort(input.slice());
console.timeEnd('native sort');
