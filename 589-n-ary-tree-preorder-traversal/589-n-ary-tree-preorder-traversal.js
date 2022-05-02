/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if(!root) return [];

    let result = [];
    result.push(root.val);
    for(child of root.children) {
        result = [...result, ...preorder(child, result)];
    }
    return result;
};