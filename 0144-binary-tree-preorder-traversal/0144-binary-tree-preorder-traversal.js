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
var preorderTraversal = function(root) {
    // if no root
    if(!root) return []

    // for pre-order traversal
    // add this node 1st, then go left, then go right
    let nodes = [root.val]
    // go down the left branch if it exists
    if(root.left) {
        let lNodes = preorderTraversal(root.left)
        nodes = [...nodes, ...lNodes]
    }
    // go down right
    if(root.right) {
        let rNodes = preorderTraversal(root.right)
        nodes = [...nodes, ...rNodes]
    }

    return nodes
};