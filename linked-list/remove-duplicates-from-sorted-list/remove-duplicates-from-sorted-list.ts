import {ListNode} from "../../utils/model";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head:ListNode) {
    let s = new Set();
    let p = head;
    let q = p;
    while (p) {
        if (s.has(p.val)) {
            q.next = p.next;
        } else {
            s.add(p.val);
            q = p;
        }
        p = p.next!;
    }

    return head;
};

