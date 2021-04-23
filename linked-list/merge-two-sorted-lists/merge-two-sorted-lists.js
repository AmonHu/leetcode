/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var utils = require('../../utils/linked-list-util');
 var ListNode = utils.ListNode;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
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
            p2 = p2.next;
        } else {
            pre = p1;
            p1 = p1.next;

        }
    }
    if (p2) {
        pre.next = p2;
    }

    return head.next;
};




let l1 = [1, 2, 4], l2 = [1, 3, 4, 5, 6, 7, 8, 9]

l1 = utils.createList(l1);
l2 = utils.createList(l2);

let l = mergeTwoLists(l1, l2);

