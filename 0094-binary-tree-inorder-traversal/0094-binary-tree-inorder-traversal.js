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
 * @return {number[]}
 */
 /**
    My Recursive Solution
    Time: 50 ms (67.47%), Space: 41.9 MB (73.78%)
  */
// var inorderTraversal = function(root, res = []) {
//     if(!root) return res
//     if(root.left) inorderTraversal(root.left, res)
//     res.push(root.val)
//     if(root.right) inorderTraversal(root.right, res)

//     return res
// };

/////////////////////////////////////////////////////////////

/**
    My Iterative Solution
    Time: 48 ms (77.57%), Space: 42.5 MB (9.1%)
 */

var inorderTraversal = function(root) {
    let stack = []
    let p = root    // p pointer to current node
    let res = []

    while(p) {
        // if there is a left branch for p
        // save p into stack for later work
        // go down the left branch
        if(p.left) {
            stack.push(p)
            p = p.left
        }

        // else if there is right branch?
        // print p in result
        // go down the right
        else if(p.right) {
            res.push(p.val)
            p = p.right
        }
        // no left or right, leaf node
        // print it to result
        // pop from stack
        // but mind it for popped entry left tree is already done
        // so make it null, so that we don't again enter it in next iteration
        else {
            res.push(p.val)
            p = stack.pop()        // pop a value, if exists
            if(p) p.left = null   // left branch is already traversed for this one
        }
    }

    return res
}