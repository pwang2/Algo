const ListNode = require('./helper.js').ListNode;

function len(list) {
    let count = 0;
    let cur = list;
    while (cur !== null) {
        count++;
        cur = cur.next;
    }
    return count;
}

function findIntersectNode(l1, l2) {
    const len1 = len(l1);
    const len2 = len(l2);
    console.log(len1, len2);
    if (len1 < len2) {
        const t = l1;
        l1 = l2;
        l2 = t;
    }

    const delta = Math.abs(len1 - len2);
    let i = 0;
    let p1 = l1;
    let p2 = l2;
    while (i < delta) {
        p1 = p1.next;
        i++;
    }
    while (true) {
        if (p1 === p2) return p1;
        p1 = p1.next;
        p2 = p2.next;
    }
}

const input1 = [1, 3, 5, 4, 6, 7, 8, 9, 11];
const input2 = [-1, -2, -3, 5, 6];
const l1 = ListNode.ArrayToList(input1);
const l2 = ListNode.ArrayToList(input2);

let cur1 = l1;
while (cur1.val !== 6) {
    cur1 = cur1.next;
}

let cur2 = l2;
while (cur2.next !== null) {
    cur2 = cur2.next;
}
cur2.next = cur1;
const intersect = findIntersectNode(l1, l2);
console.log(intersect.val);
