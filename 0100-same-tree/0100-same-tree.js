/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 /**
    My Simple Recursive Solution
    Time: 50 ms (68.45%), Space: 42.2 MB (41.75%)
  */
var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(p && !q) return false
    if(!p && q) return false

    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
