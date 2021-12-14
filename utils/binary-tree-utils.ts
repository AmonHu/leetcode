/**
 * @param root {Array}
 */
import {TreeNode} from "./model";

export const createBinaryTree = function (nodes: Array<any>) {
  if (nodes.length <= 0) {
    return null;
  }
  const root = new TreeNode(nodes[0], null, null);
  let nodeArray = [root];

  for (let i = 1; i < nodes.length; i = i * 2 + 1) {
    let tempNodeArray = [];
    for (let j = i, k = 0; j < nodes.length && k < nodeArray.length; k++, j = j + 2) {
      let left = null;
      if (nodes[j] !== null) {
        left = new TreeNode(nodes[j], null, null);
      }
      let right = null;
      if (nodes[j + 1] !== null) {
        right = new TreeNode(nodes[j + 1], null, null);
      }

      if (nodeArray[k]) {
        if (left !== null) {
          nodeArray[k].left = left;
          tempNodeArray.push(left);
        }
        if (right !== null) {
          nodeArray[k].right = right;
          tempNodeArray.push(right);
        }
      }
    }
    nodeArray = tempNodeArray;
  }
  return root;
}
