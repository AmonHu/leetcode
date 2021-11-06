import {ListNode} from "../../utils/model";

const getDecimalValue = function (head: ListNode) {
  let length = 0;
  let p: ListNode = head;
  while (p) {
    length++;
    p = p.next as ListNode;
  }

  p = head;
  let v = 0;
  while (p) {
    v += p.val * Math.pow(2, --length);
    p = p.next as ListNode;
  }

  return v;
};


