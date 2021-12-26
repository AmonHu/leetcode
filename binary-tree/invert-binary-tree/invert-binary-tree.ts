import {TreeNode} from "../../utils/model";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  const left = invertTree(root.left || null);
  const right = invertTree(root.right || null);
  root.left = right;
  root.right = left;
  return root;
};