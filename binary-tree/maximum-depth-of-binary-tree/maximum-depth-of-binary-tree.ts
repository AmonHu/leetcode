import {TreeNode} from "../../utils/model";


function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const leftDepth = arguments.callee(root.left);
  const rightDepth = arguments.callee(root.right);
  return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
};