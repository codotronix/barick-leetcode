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
    public List<Integer> postorderTraversal(TreeNode root) {
        // if root is null
        if(root == null) {
            return new ArrayList<Integer>();
        }

        /**
            For POST ORDER we first print the right, then left, then center 
         */
        List<Integer> nodes = new ArrayList<>(); 
        // go down the left subtree
        if(root.left != null) {
            nodes.addAll(postorderTraversal(root.left));
        }
        // go down the right subtree
        if(root.right != null) {
            nodes.addAll(postorderTraversal(root.right));
        }
        // finally add the center
        nodes.add(root.val);

        return nodes;
    }
}