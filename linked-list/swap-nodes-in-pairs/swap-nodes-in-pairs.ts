/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import {ListNode} from "../../utils/model";
import {createList} from "../../utils/linked-list-util";

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const preHead = new ListNode(0, head);
  let p = preHead;
  while (p && p.next && p.next.next) {
    const q = p.next;
    const r = p.next.next;

    q.next = r.next;
    r.next = q;
    p.next = r;
    p = q;
  }

  return preHead.next;
};

const head = createList([1, 2, 3, 4, 5]);
swapPairs(head);