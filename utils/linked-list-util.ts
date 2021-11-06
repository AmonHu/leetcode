
import {ListNode} from "./model";

/**
 * @param arr {number[]}
 * @return {ListNode}
 */
export function createList(arr: number[]) {
  if (arr.length <= 0) {
    return null;
  }
  let head = new ListNode(arr[0], null);
  let p = head;
  for (let n of arr.slice(1)) {
    p.next = new ListNode(n, null);
    p = p.next;
  }

  return head;
}

/**
 * @param head {ListNode}
 */
export function printList(head: ListNode) {
  let p = head
  while (p !== null) {
    console.log(p.val);
    p = p.next!;
  }
}
