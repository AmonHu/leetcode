import {TreeNode} from "../../utils/model";

const helper = (root: TreeNode | null, lower: number, upper: number): boolean => {
  if (root === null) {
    return true;
  }
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
const isValidBST = function (root: TreeNode | null) {
  return helper(root, -Infinity, Infinity);
};


