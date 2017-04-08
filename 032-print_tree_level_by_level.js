const input = require('./030-construct_tree_from_level_traversal.js');

function height(node) {
    if (node === null) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
}

function printLayer(node, layer, arr) {
    if (node === null) return;
    if (layer === 1) arr.push(node.val);
    printLayer(node.left, layer - 1, arr);
    printLayer(node.right, layer - 1, arr);
}

function printTree(node, h) {
    for (let i = 1; i <= h; i++) {
        const arr = [];
        printLayer(node, i, arr);
        console.log(arr);
    }
}

const h = height(input);
printTree(input, h);


console.log('=================no recursion=================');

function printTree2(tree) {
    const q = [];
    q.push(tree);
    while (true) {
        let s = q.length;
        if (s === 0) return;
        const cur = [];
        while (s-- > 0) {
            const node = q.shift();
            cur.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        console.log(cur);
    }
}

printTree2(input);
