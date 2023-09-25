/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        // if root is null
        if(root == null) {
            return new ArrayList<Integer>();
        }

        List<Integer> nodes = new ArrayList<>();
        nodes.add(root.val);

        // go down left
        if(root.left != null) {
            nodes.addAll(preorderTraversal(root.left));
        }

        // go down right
        if(root.right != null) {
            nodes.addAll(preorderTraversal(root.right));
        }

        return nodes;
    }
}