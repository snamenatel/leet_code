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
var maxDepth = function(root) {
    let max = 0;
      function depth(el) {
        if(!el) {
            return 0
        }

        let leftDepth = depth(el.left);
        let rightDepth = depth(el.right);
        return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1
    }   
    return depth(root)
    
};

