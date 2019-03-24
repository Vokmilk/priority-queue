const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		
	}

	push(data, priority) {
		var node=new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		
	}

	pop() {
	
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
		}
		else {
			if(this.parentNodes[0].left === null){
				this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];

			} else if (this.parentNodes[0].right === null){
				this.parentNodes[0].right = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.shift();

			}
		}
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
