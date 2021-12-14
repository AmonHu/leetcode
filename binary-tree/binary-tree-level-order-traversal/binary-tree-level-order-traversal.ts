import {TreeNode} from "../../utils/model";

function levelOrder(root: TreeNode | null): number[][] {
  const result = new Array<Array<number>>();
  if (!root) {
    return result;
  }

  let queue: Array<TreeNode> = [root];
  while (queue.length) {
    let tempQueue: Array<TreeNode> = [];
    const values: Array<number> = [];
    while (queue.length) {
      const peek = queue.shift() as TreeNode;
      values.push(peek.val);
      if (peek.left) {
        tempQueue.push(peek.left);
      }
      if (peek.right) {
        tempQueue.push(peek.right);
      }
    }
    result.push(values);
    queue = tempQueue;
  }

  return result;
};
