/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            for (let j = len - 1; j >= i; j--) {
                if (nums[j] > 0) {
                    const t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                    break;
                }
            }
        }
    }

    const arr = [];
    for (let i = 0; i <= len; i++) {
        if (nums[i] <= 0) break;
        const n = nums[i];
        arr[n - 1] = n;
    }
    for (let i = 0; i <= len; i++) {
        if (arr[i] === undefined) return i + 1;
    }
    return 1;
};
const input = [1, 0];
const result = firstMissingPositive(input);
console.log(result);
