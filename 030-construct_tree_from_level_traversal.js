const TreeNode = require('./helper.js').TreeNode;

function buildTree(input) {
    const root = new TreeNode(input[0]);
    let nodeList = [root];
    let cur = 0;
    while (cur < input.length) {
        const newList = [];
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (input[++cur] !== undefined) {
                node.left = new TreeNode(input[cur]);
                newList.push(node.left);
            }

            if (input[++cur] !== undefined) {
                node.right = new TreeNode(input[cur]);
                newList.push(node.right);
            }
        }
        nodeList = newList;
    }
    return root;
}

const input = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
const root = buildTree(input);
module.exports = root;
