import {ListNode} from "../../utils/model";

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  const set = [];
  let p = head;
  while (p) {
    set.push(p);
    p = p.next;
  }
  const pre = set[set.length - n - 1];
  if (!pre) {
    head = set[set.length - n].next;
  } else {
    pre.next = set[set.length - n].next;
  }

  return head;
};
