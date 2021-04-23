
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
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
        p = p.next;
        i++;
    }

    let prehead = new ListNode(0, head);

    while ()



        return head;
};

import { createList, printList } from '../../utils/linked-list-util.js'


let list = createList([1, 2, 3, 4, 5]);

printList(list);
list = reverseBetween(list);
printList(list);
