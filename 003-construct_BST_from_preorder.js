const Node = require('./helper.js');

function peek(s) {
    return s[s.length - 1];
}

function constructTree(a) {
    const node = new Node(a[0]);
    const s = [node];
    let i = 1;
    while (i < a.length) {
        if (a[i] < peek(s).val) {
            const p = peek(s);
            p.left = new Node(a[i]);
            s.push(p.left);
        } else {
            let fit;
            while (s.length > 0 && peek(s).val < a[i]) {
                fit = s.pop();
            }
            fit.right = new Node(a[i]);
            s.push(fit.right);
        }
        i++;
    }
    return node;
}

function preOrderTraverse(root) {
    if (root === undefined) return;
    process.stdout.write(`${root.val},`);
    preOrderTraverse(root.left);
    preOrderTraverse(root.right);
}

const input = [10, 5, 1, 7, 40, 50];
console.log(`input:\t ${input}`);

const root = constructTree(input);

process.stdout.write('output:\t ');
preOrderTraverse(root);
process.stdout.write('\b');
