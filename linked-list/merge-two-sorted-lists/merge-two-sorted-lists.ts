/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
import {ListNode} from "../../utils/model";


const mergeTwoLists = function (l1:ListNode, l2:ListNode) {
    let head = new ListNode(0, l1);
    let p1 = l1;
    let pre = head;
    let p2 = l2;
    while (p1 && p2) {
        if (p1.val > p2.val) {
            let q = new ListNode(p2.val, null);
            pre.next = q;
            q.next = p1;
            pre = q;
            p2 = p2.next!;
        } else {
            pre = p1;
            p1 = p1.next!;

        }
    }
    if (p2) {
        pre.next = p2;
    }

    return head.next;
};


