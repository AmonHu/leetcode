
import {TreeNode} from "../../utils/model";

const postorderTraversal = function (root: TreeNode) {
  let arr = [];

  (function (root: TreeNode) {
    if (root) {
      arguments.callee(root.left);
      arguments.callee(root.right);
      arr.push(root.val);
    }
  })(root)

  return arr;
};

