const TreeNode = require('./helper.js').TreeNode;

function pathSum(node, remainSum, curPath, solution) {
    curPath.push(node.val);
    if (node.val === remainSum && node.left === null && node.right === null) {
        solution.push(curPath.slice(0));
    } else {
        if (node.left) {
            pathSum(node.left, remainSum - node.val, curPath, solution);
        }
        if (node.right) {
            pathSum(node.right, remainSum - node.val, curPath, solution);
        }
    }
    curPath.pop();
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

const solution = [];
const curPath = [];
pathSum(root, 22, curPath, solution);
console.log(solution);

module.exports = root;
