const ListNode = require('./helper.js').ListNode;

function partition(head, x) {
    const d1 = new ListNode();
    const d2 = new ListNode();
    let l1 = d1;
    let l2 = d2;
    let cur = head;
    while (cur) {
        if (cur.val < x) { // important, equal case need to be put to right
            l1.next = cur;
            l1 = l1.next;
        } else {
            l2.next = cur;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    l1.next = d2.next;
    l2.next = null;
    return d1.next;
}

const input = ListNode.ArrayToList([1, 4, 2, 5, 3, 2, 5, 2]);
const result = partition(input, 3);
console.log(ListNode.ListToArray(result));
