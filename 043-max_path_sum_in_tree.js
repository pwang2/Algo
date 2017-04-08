const TreeNode = require('./helper.js').TreeNode;

function solution(tree) {
    if (!tree) return 0;
    return Math.max(...[solution(tree.left) + tree.val, solution(tree.right) + tree.val, solution(tree.left) + solution(tree.right) + tree.val]);
}

/*      5
 *     / \
 *    4   8
 *   /   / \
 *  11  13  4
 * /  \    / \
 *7    2  5   1 */
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

const result = solution(root);
console.log(result);
