// Set: no dup values | can be implemented with array
// key funcs: has, values, add, remove...
// other funcs: union, intersection, difference, subset 

function mySet() {
    // collection holds set
    let collection = [];

    // checks if set has element (bool)
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    // return all vals in set
    this.values = function() {
        return collection;    
    };

    // adds to set + return bool
    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    // removes from set + return bool
    this.remove = function(element) { // delete() in ES6
        if (this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index,1); // splice changes org arr
            return true;
        }
        return false;
    };

    this.size = function() { // is a property in ES6 (call size[X] instead of size(X))
        return collection.length;
    };

    // combine 2 sets into 1
    // leaves out dups in both sets!
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        secondSet.forEach(function(element) {
            unionSet.add(element);
        });
        
        return unionSet;
    };

    // get new set w/ common ground from 2 sets
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(element) {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    };

    // opposite of intersection
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        
        firstSet.forEach(function(ele) {
            if (!otherSet.has(ele)) {
                differenceSet.add(ele);
            }
        });

        return differenceSet;
    };

    // bool, checks if current set is a subset of another set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };
}

let setA = new mySet(); 
let setB = new mySet();
setA.add("a"); // [a]
setB.add("b"); // [b]
setB.add("c"); // [bc]
setB.add("a"); // [bca]
setB.add("d"); // [bcad]
console.log(setA.subset(setB)); // true
console.log(setA.intersection(setB).values()); // [a]
console.log(setB.difference(setA).values()); // [bcd]

// ES6 sets!
let setC = new Set(); 
let setD = new Set();
setC.add("a"); // [a]
setD.add("b"); // [b]
setD.add("c"); // [bc]
setD.add("a"); // [bca]
setD.add("d"); // [bcad]
console.log(setD.values()); // [bcad]
setD.delete("a"); // [bcd]
console.log(setD.has("a")); // false
console.log(setD.add("d")); // returns full set object!
