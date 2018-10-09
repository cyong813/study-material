// Stack: LIFO | can be implemented with array
// key funcs: push, pop, peek, length

// Palindrome example:
let letters = []; // create stack
var word = "racecar";
var revWord = "";

//put letters of the word into stack
for (let i=0; i<word.length;i++) {
    letters.push(word[i]);
}

//pop off stack in rev order
for (let i=0; i<word.length;i++) {
    revWord += letters.pop();
}

if (revWord === word) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

const Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value to the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes + returns value at the end of the stack
    this.pop = function() {
        if (this.count === 0) return undefined; // check if stack empty
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count]; 
        return result;
    };

    this.size = function() {
        return this.count;
    };

    // Returns value at end of stack (but doesn't remove like pop does!)
    this.peek = function() {
        return this.storage[this.count-1]; //count-1 because indexing!
    };
}

// Stack Testing
let s = new Stack();

s.push(1); //count=1, storage={1:1}
s.push(2); //count=2, storage={1:1,2:2}
console.log(s.peek()); // storage[1] = 2
console.log(s.pop()); // count=1, delete 2
console.log(s.peek()); // storage[0] = 1