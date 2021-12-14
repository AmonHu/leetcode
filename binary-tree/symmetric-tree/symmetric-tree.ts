import {TreeNode} from "../../utils/model";

const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function(root: TreeNode | null): boolean {
  return check(root, root);
};
