const ListNode = require('./helper.js').ListNode;

function swapK(head) {
    let curNode = head;
    let nextNode;
    let preNode;
    while (curNode) {
        nextNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = nextNode;
    }
    return head; // new tail
}

function swapKGroup(head, k) {
    if (!head) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let lastEnd = dummy;
    let swapStart = head;
    while (true) {
        let i = 0;
        let p = swapStart;
        while (++i < k && p.next) {
            p = p.next;
        }
        let nextStart = p.next;
        p.next = null; // point end of current chunk to null, and swap it
        lastEnd.next = p;
        if (i < k) {
            lastEnd.next = swapStart;
            nextStart = null;
        } else {
            const tail = swapK(swapStart);
            tail.next = nextStart;
            lastEnd = tail;
            swapStart = nextStart;
        }
        if (!nextStart) return dummy.next;
    }
}

const input = [1, 2, 3];
const list = ListNode.ArrayToList(input);
const result = swapKGroup(list, 3);
console.log(ListNode.ListToArray(result));
