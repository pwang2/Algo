const ListNode = require('./helper.js').ListNode;

function detectLoop(head) {
    if (head === null || head.next === null) return false;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null && slow !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }
    return false;
}

function findEntry(head) {
    if (head === null || head.next === null) return false;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null && slow !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            fast = head;
            while (fast !== null && slow !== null) {
                fast = fast.next;
                slow = slow.next;
                if (fast === slow) {
                    return fast;
                }
            }
        }
    }
    return null;
}


const input = [1, 2, 3, 4, 5, 7];
const head = ListNode.ArrayToList(input);
let cur = head;
let someNode;
let counter = 0;
while (cur.next != null) {
    if (counter++ === 2) someNode = cur;
    cur = cur.next;
}
const tail = cur;
tail.next = someNode;
const result = detectLoop(head);
console.log(result);

console.log(findEntry(head));
