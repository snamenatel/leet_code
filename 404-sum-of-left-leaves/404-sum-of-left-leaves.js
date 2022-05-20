/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, left = false) {
     if(!root) {
            return 0;
     }
    let rightSum = sumOfLeftLeaves(root.right);
    let leftSum = sumOfLeftLeaves(root.left, true);
    return (left && !root.right && !root.left ? root.val : 0) + leftSum + rightSum;
};