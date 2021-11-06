export class TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;

  constructor(val: number, left: TreeNode, right: TreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}