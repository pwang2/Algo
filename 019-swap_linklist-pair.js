const ListNode = require('./helper.js').ListNode;

function swapPairs(head) {
    if (head === null || head.next === null) return head;
    let tail = new ListNode();
    let cur = head;
    head = cur.next;
    while (cur !== null && cur.next !== null) {
        tail.next = cur.next;
        const temp = cur.next;
        cur.next = temp.next;
        temp.next = cur;
        tail = cur;
        cur = cur.next;
    }
    return head;
}

const input = ListNode.ArrayToList([1, 2, 3]);
const res = swapPairs(input);
console.log(ListNode.ListToArray(res));
const input2 = ListNode.ArrayToList([1, 2, 3, 4]);
const res2 = swapPairs(input2);
console.log(ListNode.ListToArray(res2));
