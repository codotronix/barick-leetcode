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
 * @param {number} targetSum
 * @return {boolean}
 */
/*
* My Simple Recursive Solution, I LOVE Recursion
* Time: 52 ms (92.8%), Space: 46.3 MB (14.65%)
*/
var hasPathSum = function(root, targetSum) {
    // if tree is empty
    if(!root) return false

    // if it is a leaf node
    // no way to go further on this path
    // so return either true or false
    if (!root.left && !root.right) {
      if(targetSum === root.val) return true
      else return false
    }

    // if it is not a leaf node
    // then subtract the value of this node from target
    // and see if the remaining can be made with any of the subtrees
    let rem = targetSum - root.val
    if(root.left && hasPathSum(root.left, rem)) return true
    else if(root.right && hasPathSum(root.right, rem)) return true
    else return false
};
