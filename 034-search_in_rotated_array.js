function findDivider(nums) {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return i - 1;
        }
    }
    return len - 1;
}

function searchInRange(nums, target, start, end) {
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > target) end = mid - 1;
        else if (nums[mid] < target) start = mid + 1;
        else return mid;
    }
    return -1;
}

function search(nums, target) {
    const div = findDivider(nums);
    if (target >= nums[0]) return searchInRange(nums, target, 0, div);
    return searchInRange(nums, target, div + 1, nums.length - 1);
}

let input = [7, 8, 9, 1, 2, 3, 4, 5];
console.log(`5 locateted at: ${search(input, 5)}`);
console.log(`8 locateted at: ${search(input, 8)}`);
console.log(`1 locateted at: ${search(input, 1)}`);
console.log(`6 locateted at: ${search(input, 6)}`);

console.log('--------------------------');
input = [1, 3];
console.log(`1 locateted at: ${search(input, 1)}`);
console.log(`3 locateted at: ${search(input, 3)}`);

console.log('--------------------------');
input = [3, 1];
console.log(`1 locateted at: ${search(input, 1)}`);
console.log(`3 locateted at: ${search(input, 3)}`);
