/**
 * @param arr {number[]}
 * @return {ListNode}
 */
var createList = function (arr) {
    if (arr.length <= 0) {
        return null;
    }
    let head = new ListNode(arr[0], undefined);
    let p = head;
    for (let n of arr.slice(1)) {
        p.next = new ListNode(n, undefined);
        p = p.next;
    }

    return head;
}

/**
 * @param head {ListNode}
 */
var printList = function (head) {
    let p = head
    while (p !== null) {
        console.log(p.val);
        p = p.next;
    }
}

export { createList, printList }; 