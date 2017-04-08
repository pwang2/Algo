function sumNestedArray(arr, depth) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (Array.isArray(el)) {
            result += sumNestedArray(el, depth + 1);
        } else {
            result += el * depth;
        }
    }
    return result;
}

function solution(arr) {
    return sumNestedArray(arr, 1);
}

console.log(solution([
    [1, 1], 2, [1, 1],
]));
