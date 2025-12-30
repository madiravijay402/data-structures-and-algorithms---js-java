class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
let root=new TreeNode(10);
root.left=new TreeNode(5);
root.right=new TreeNode(12)

console.log(root);

//pre order - root left right
//inorder - left root right
//postorder - left right root

//pre order
function preorder(root){
    if(root===null)return;
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
preorder(root);

//in order
function inorder(root){
    if(root===null)return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
inorder(root);

//post order
function postorder(root){
    if(root===null)return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}
postorder(root);
