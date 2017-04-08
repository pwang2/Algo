const tree = require('./030-construct_tree_from_level_traversal.js');

function pathSum(root, sum) {
    return (function r(node, prefix) {
        if (node === null || node === undefined) return 0;
        prefix = (prefix || []).map(p => p + node.val);
        prefix.push(node.val);

        return prefix.filter(p => sum === p).length +
            r(node.left, prefix) +
            r(node.right, prefix);
    }(root, []));
}
const result = pathSum(tree, 8);
console.log(result);
