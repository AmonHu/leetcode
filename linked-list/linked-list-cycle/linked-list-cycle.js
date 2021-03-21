function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    while (head) {
        if (head.val === undefined) {
            return true;
        } else {
            head.val = undefined;
            head = head.next;
        }
    }

    return false;
};


var createLinkedList = function (arr, pos) {
    let head = new ListNode(0);
    let p = head;
    let q = null;

    for (let i = 0; i < arr.length; i++) {
        if (i === pos) {
            q = p;
        }
        p.val = arr[i];

        if (i < arr.length - 1) {
            p.next = new ListNode(0);
            p = p.next;
        }
    }

    p.next = q;

    return head;
}

let list = createLinkedList([1, 2], -1);


console.log(hasCycle(list));
