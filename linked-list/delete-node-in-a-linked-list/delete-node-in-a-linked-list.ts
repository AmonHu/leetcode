import {ListNode} from "../../utils/model";


const deleteNode = function (node:ListNode) {
    node.val = node.next!.val;
    node.next = node.next!.next;
};





