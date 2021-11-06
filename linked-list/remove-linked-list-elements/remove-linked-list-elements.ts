import {ListNode} from "../../utils/model";
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head:ListNode, val:number) {
    let first = new ListNode(0, head);
    let p = first;
    let q = p;
    while (p !== null) {
        if (p.val === val) {
            q.next = p.next;
            p = q.next!;
            continue;
        }
        q = p;
        p = p.next!;

    }
    return first.next;
};
