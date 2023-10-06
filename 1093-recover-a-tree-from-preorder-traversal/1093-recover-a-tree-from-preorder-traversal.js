/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let i=0
    let rootVal = ''
    while(traversal[i] !== '-' && i<traversal.length) {
        rootVal+= traversal[i]
        i++
    }
    rootVal = parseInt(rootVal)
    let root = new TreeNode(rootVal)
    // i is now pointing to the 1st dash
    let level=0, node = root, stack = []
    while(i<traversal.length) {
        let nextVal = ''    // collect multi-digit numbers as string, concat, parse
        let nextLevel=0
        // get the nextValue and its level
        while(i < traversal.length) {
            // collect dashes only until the number is found
            if(traversal[i] === '-') {
                if(!nextVal) nextLevel++
                else {
                    break
                }
            }
            // collect the digits as string
            else {
                nextVal += traversal[i]
            }

            i++
        }
        
        // parse the string to Number
        nextVal = parseInt(nextVal)

        let newNode = new TreeNode(nextVal)

        // if it is a child of current level?
        // create it as a left child of current node
        if(nextLevel > level) {
            node.left = newNode
            stack.push({node, level})    // save it for later
        }
        // on same level? or less?
        // retrieve the parent from stack
        // and add it as right child
        //else if(nextLevel <= level) {
        else {
            while(nextLevel <= level) {
                let n = stack.pop()
                node = n.node
                level = n.level
            }

            node.right = newNode
        }

        node = newNode
        level = nextLevel
    }

    return root
};