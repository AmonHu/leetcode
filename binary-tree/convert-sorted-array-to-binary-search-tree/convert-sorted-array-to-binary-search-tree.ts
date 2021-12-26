import {TreeNode} from "../../utils/model";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 由于要求高度平衡，因此我们取中间的元素作为根节点
  if (!nums.length) {
    return null;
  }
  // 取中间
  const mid = nums.length >> 1;
  // 构建新的树，根节点为中间的
  const res = new TreeNode(nums[mid]);
  // 分离递归左右树
  res.left = sortedArrayToBST(nums.slice(0, mid));
  res.right = sortedArrayToBST(nums.slice(mid + 1));
  return res
};