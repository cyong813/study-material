// Queue: FIFO | can be implemented with array
// key funcs: print, enqueue, dequeue, front, size, isEmpty

function Queue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(ele) {
        collection.push(ele);
    };

    this.dequeue = function() {
        return collection.shift(); // shift removes + returns 1st element from array 
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() { // bool
        return collection.length === 0;  
    }
}

function PriorityQueue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(ele) {
        if (this.isEmpty()) {
            collection.push(ele); // push arrs: ['item', priority #]
        }
        else {
            let added = false;
            for (let i=0;i<collection.length;i++) {
                if (ele[1] < collection[i][1]) { // checking priorities
                    collection.splice(i,0,ele); // insert element at index i
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(ele);
            }
        }
    };

    this.dequeue = function() {
        let value = collection.shift(); // shift removes + returns 1st element from array 
        return value[0];
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() { // bool
        return collection.length === 0;  
    }
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print(); // [abc]
q.dequeue(); // [bc]
console.log(q.front()); // b
q.print(); // [bc]

let pq = new PriorityQueue();
pq.enqueue(['BC',2]); // [['BC',2]]
pq.enqueue(['QL',3]); // [['BC',2],['QL',3]]
pq.enqueue(['EWW',1]); // [['EWW',1],['BC',2],['QL',3]]
pq.print();
pq.dequeue();
pq.front();
pq.print();





