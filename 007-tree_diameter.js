const TreeNode = require('./helper').TreeNode;

function height(node) {
    if (!node) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
}

function diameter(node) {
    if (!node) return 0;
    const lh = height(node.left);
    const rh = height(node.right);
    const ld = diameter(node.left);
    const rd = diameter(node.right);

    return Math.max(...[ld, rd, 1 + lh + rh]);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameter(root));
