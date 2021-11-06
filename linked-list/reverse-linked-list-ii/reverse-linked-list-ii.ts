/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
import {ListNode} from "../../utils/model";


var reverseBetween = function (head: ListNode, left: number, right: number) {
  let p = head;
  let rear = null;
  let fore = null;
  let i = 1;
  while (p) {
    if (i === left - 1) {
      fore = p;
    }
    if (i === right) {
      rear = p;
    }
    p = p.next!;
    i++;
  }

  let prehead = new ListNode(0, head);


  return head;
};

