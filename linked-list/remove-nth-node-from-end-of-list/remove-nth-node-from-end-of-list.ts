import {ListNode} from "../../utils/model";
import {createList} from "../../utils/linked-list-util";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
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

const head = createList([1]);
removeNthFromEnd(head, 1);