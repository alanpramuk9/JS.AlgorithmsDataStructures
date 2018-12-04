/*
    LIFO
    Complexity: 
        Access  Search Insert Delete
          n       n      1      1

*/

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; //BIO12 at base; PSY44 at top

/* creat a stack class that does the following: 
    push() method pushes value to the stack.
    pop() method pops the first value from the stack.
    peek() method returns the first value from the stack.
    isEmpty() method checks if ths stack is empty.
    .clear() method removes all the elements from the stack.
*/

class Stack {
    constructor() {
        this.collection = [];
    }
    print(){
        console.log(this.collection);
    }
    push(val){
        return this.collection.push(val);
    }
    pop(){
        return this.collection.pop();
    }
    peek(){
        return this.collection[this.collection.length-1];
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    clear(){
        return this.collection.length = 0;
    }
}