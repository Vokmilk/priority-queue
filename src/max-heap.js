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
		if (this.root === null) {
			this.root=node;
			
		} else {
			this.root=node;
		}
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
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
