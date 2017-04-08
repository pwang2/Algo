const helper = require('./helper');
/**
 * merge arry b to array a
 *
 * @param a {Array}
 * @param b {Array}
 * @returns {undefined}
 */
function mergeArray(a, b) {
    let i = 0;
    let j = 0;
    let lena = a.length;

    // make sure a, b does not exceed the index
    while (i < lena && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else {
            a.splice(i, 0, b[j]);
            j++;
            // when insert item from b to a, a is boundary should expand as well
            lena++;

            // same element in a will be compared with element in b,
            // but since one element has been insert before it
            // we need to correct the insert point
            i++;
        }
    }
    while (j < b.length) {
        a.push(b[j++]);
    }
}

const a = [1, 3, 5, 6, 11, 12];
const b = [4, 7, 9, 32];
mergeArray(a, b);
console.log(a);

const c = [];
const d = [1, 2];
mergeArray(c, d);
console.log(c);

/** ***********************************************************************************************/
const ListNode = helper.ListNode;

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(Number.MIN_SAFE_INTEGER);
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
const l1 = ListNode.ArrayToList([2, 3, 8]);
const l2 = ListNode.ArrayToList([4, 5, 9, 11]);

let result = mergeTwoLists(l1, l2);
while (result) {
    process.stdout.write(`${result.val} `);
    result = result.next;
}
