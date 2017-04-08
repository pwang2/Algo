const TreeNode = require('./helper.js').TreeNode;

function hasPathSum(root, sum) {
    if (root === null) return false;
    if (root.left === null && root.right === null) return sum === root.val;
    const newSum = sum - root.val;
    let d1 = false;
    let d2 = false;
    if (root.left) {
        d1 = hasPathSum(root.left, newSum);
    }
    if (root.right) {
        d2 = hasPathSum(root.right, newSum);
    }
    return d1 || d2;
}
const root = new TreeNode(1);
root.left = new TreeNode(2, null, null);
root.right = null;

console.log(hasPathSum(root, 1));
