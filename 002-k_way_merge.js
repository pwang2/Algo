const ListNode = require('./helper').ListNode;

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(Number.MIN_SAFE_INTEGER);
    // always move tail to next correct element in l1 or l2
    let tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
}

function kmerge(lists, start, end) {
    if (end - start === 0) return lists[start];
    if (end - start === 1) return mergeTwoLists(lists[start], lists[end]);

    const mid = Math.floor((end - start) / 2);
    const l = kmerge(lists, start, start + mid);
    const r = kmerge(lists, start + mid + 1, end);
    return mergeTwoLists(l, r);
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return kmerge(lists, 0, lists.length - 1);
}

const input = [
    [-10, -9, -9, -3, -1, -1, 0],
    [-5],
    [4],
    [-8],
    [],
    [-9, -6, -5, -4, -2, 2, 3],
    [-3, -3, -2, -1, 0],
];
const lists = input.map(c => ListNode.ArrayToList(c, 0));
const result = mergeKLists(lists, 0, lists.length - 1);
console.log(ListNode.ListToArray(result).join());
