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
 * @return {boolean}
 */
 /**
    My Simple Recursive Solution
  */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true
    if(root.left && !root.right) return false
    if(!root.left && root.right) return false

    // both left and right branch exists
    return isSym(root.left, root.right)
};

// helper function to check if branch b1 and b2 are symmetric
function isSym(b1, b2) {
    if(!b1 && !b2) return true
    if(b1 && !b2) return false
    if(!b1 && b2) return false
    if(b1.val !== b2.val) return false
    
    return isSym(b1.left, b2.right) && isSym(b1.right, b2.left)
}