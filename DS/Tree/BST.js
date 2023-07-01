// A tree is a collection of nodes connected by some edges.
// A tree is a non linear data structure.

/* A Binary Search tree (BST) is a binary tree in which nodes that have lesser value are stored on the left
   while the nodes with a higher value are stored at the right.*/

// Creating a Node Class
class Node 
{
    constructor (val) 
    {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree 
{
    constructor () 
    {
        this.root = null;
    }

    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(data)
    {
	    // Creating a node and initialising with data
	    var newNode = new Node(data);
					
	    // root is null then node will be added to the tree and made root.
	    if(this.root === null)
		    this.root = newNode;

	    else
		    // find the correct position in the tree and add the node
		    this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree at the left or right node
    insertNode(node, newNode)
    {
	    // if the data is less than the node data move left of the tree
	    if(newNode.key < node.key)
	    {
		    // if left is null insert node here
		    if(node.left === null)
			    node.left = newNode;
		    else

			    // if left is not null recur until
			    // null is found
			    this.insertNode(node.left, newNode);
	    }

	    // if the data is more than the node
	    // data move right of the tree
	    else
	    {
		    // if right is null insert node here
		    if(node.right === null)
			    node.right = newNode;
		    else

			    // if right is not null recur until
			    // null is found
			    this.insertNode(node.right,newNode);
	    }
    }

	getRootNode() 
	{
		return this.root;
	}

	preorderTrav(root) {
		if(root != null) {
		   console.log(root.key); // Traverse the root node
		   this.preorderTrav(root.left); /* Traverse the left subtree */
		   this.preorderTrav(root.right); /* Traverse the right subtree */
		}
	 }

	inorderTrav(root) 
	{
		if(root != null){
			this.inorderTrav(root.left)
		    console.log(root.key)
		    this.inorderTrav(root.right)
		}
	}

	postorderTrav(root) {
		if(root != null) {
		   this.postorderTrav(root.left); /* Traverse the left subtree */
		   this.postorderTrav(root.right); /* Traverse the right subtree */
		   console.log(root.key); // Traverse the root node
		}
	}
}

let tree = new BinarySearchTree()
tree.insert(100)
tree.insert(40)
tree.insert(60)
tree.insert(70)
tree.insert(800)
tree.insert(80)
tree.insert(200)
tree.insert(150)

let root = tree.getRootNode()
console.log(tree.inorderTrav(root))
debugger