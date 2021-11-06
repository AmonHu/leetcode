/**
 * @param {ListNode} head
 * @return {boolean}
 */
import {ListNode} from "../../utils/model";

const hasCycle = function (head:ListNode) {
    while (head) {
        if (head.val === undefined) {
            return true;
        } else {
            head.val = 0;
            head = head.next!;
        }
    }

    return false;
};
