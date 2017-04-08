const TreeNode = require('./helper.js').TreeNode;

function foldNTimes(n) {
    const root = new TreeNode('down');
    const q = [root];

    /* eslint-disable no-constant-condition */
    while (true) {
        const h = q.shift();
        h.left = new TreeNode('down');
        h.right = new TreeNode('up');
        q.push(h.left);
        q.push(h.right);
        if (q.length === 2 ** (n - 1)) break;
    }
    return root;
}

function inorder(node) {
    if (node === undefined) return;
    if (node.left) inorder(node.left);
    console.log(node.val);
    if (node.right) inorder(node.right);
}

const tree = foldNTimes(5);
inorder(tree);
