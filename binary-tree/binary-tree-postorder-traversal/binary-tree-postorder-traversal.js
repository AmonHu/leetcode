function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let arr = [];

    (function (root) {
        if (root) {
            arguments.callee(root.left);
            arguments.callee(root.right);
            arr.push(root.val);
        }
    })(root)

    return arr;
};

