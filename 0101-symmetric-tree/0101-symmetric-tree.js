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
    Time: 56 ms (77.36%), Space: 44.6 MB (35.93%)
  */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true
    if(root.left && !root.right) return false
    if(!root.left && root.right) return false

    // both left and right branch exists
    return isMirror(root.left, root.right)
};

// Helper function to check if branch b1 and b2 are 
// mirror image of each other
function isMirror(b1, b2) {
    if(!b1 && !b2) return true
    if(b1 && !b2) return false
    if(!b1 && b2) return false
    if(b1.val !== b2.val) return false
    
    // Now we need to compare left to right and vice versa
    // to get the mirror effect
    return isMirror(b1.left, b2.right) && isMirror(b1.right, b2.left)
}
