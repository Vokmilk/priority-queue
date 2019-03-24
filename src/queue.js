const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap;

	}

	push(data, priority) {
		if (this.maxSize=this.heap.maxSize) {
			throw 'Error';
		} else {
		this.heap.push(data,priority)	
		}

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
