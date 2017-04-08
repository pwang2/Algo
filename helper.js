module.exports = {
    TreeNode: class {
        constructor(val, left, right) {
            this.val = val;
            this.left = left || null;
            this.right = right || null;
        }
    },
    ListNode: class ListNode {
        constructor(val, next) {
            this.val = val;
            this.next = next || null;
        }

        static ArrayToList(arr) {
            const start = new ListNode();
            let cur = start;
            for (let i = 0; i < arr.length; i++) {
                cur.next = new ListNode(arr[i]);
                cur = cur.next;
            }
            cur.next = null;
            return start.next;
        }

        static ListToArray(list) {
            const ret = [];
            while (list != null) {
                ret.push(list.val);
                list = list.next;
            }
            return ret;
        }
    },
};
