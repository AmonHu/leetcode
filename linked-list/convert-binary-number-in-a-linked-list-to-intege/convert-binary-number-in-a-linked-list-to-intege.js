
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let length = 0;
    let p = head;
    while (p) {
        length++;
        p = p.next;
    }

    p = head;
    let v = 0;
    while (p) {
        v += p.val * Math.pow(2, --length);
        p = p.next;
    }

    return v;
};

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

let list = createList([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
getDecimalValue(list);
