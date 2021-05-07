/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode, createList } = require("../../utils/linked-list-util");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let s = new Set();
    let p = head;
    let q = p;
    while (p) {
        if (s.has(p.val)) {
            q.next = p.next;
        } else {
            s.add(p.val);
            q = p;
        }
        p = p.next;
    }

    return head;
};

var l = createList([1,1,2,3,3]);
l = deleteDuplicates(l); 