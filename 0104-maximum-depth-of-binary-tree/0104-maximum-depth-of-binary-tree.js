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
 /**
    My simple recursive solution, I LOVE RECURSION
    Time: 67 ms (22.76%), Space: 45 MB (73.02%)
  */
var maxDepth = function(root) {
    if(!root) return 0

    // 1 for this node
    // plus the maximum of either tree
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
