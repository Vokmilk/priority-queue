class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.right=null;
		this.left=null;
	}

	appendChild(node) {

		if (!this.left) {
			this.left = node;
			node.parent=this;}
		else if (!this.right) {
				this.right = node;
				node.parent=this;
			}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent=null;} 
		else if (this.right == node) {	
			this.right = null;
			}
			else {
				alert('node is not a child of this node')
				
			}
	}

	remove() {
		if(this.parent)
		this.parent.removeChild(this);
	}
 
	swapWithParent() {
		if (this.parent === null) {
			return;
		}
		else {
			var currentParent = this.parent;
			var newParent = this.parent.parent;

			if (newParent) {
				this.parent = newParent;
				if (this.parent.left === currentParent) {
					this.parent.left = this;
				}
				else {
					this.parent.right = this;
				}
			} else {
				this.parent = null;
			}

			var left = this.left;
			var right = this.right;

			if (currentParent.left == this) {
				this.left = currentParent;
				this.right = currentParent.right;
				if (this.right) {
					this.right.parent = this;
				}
			}
			else {
				this.left = currentParent.left;
				this.right = currentParent;
				if (this.left){
					this.left.parent = this;
				}
			}

			currentParent.left = left;
			currentParent.right = right;

			if(currentParent.left){
				currentParent.left.parent = currentParent;
			}

			if(currentParent.right){
				currentParent.right.parent = currentParent;
			}

			currentParent.parent = this;

		}
	}
}

module.exports = Node;