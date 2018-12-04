/*
    FIFO (First-In First-Out) principle

    Methods: 
        -enqueue method pushes an element to the tail of the queue
        -dequeue method removes and returns the element at the front of the queue
*/

//ES5 
function Queue () { 
    var collection = [];
    this.print = function() {
        var str = ""; 
        for(var i = 0; i < collection.length; i++) {
            str += collection[i] +" "; 
        }
        return str; 
    };
    this.enqueue = function(val) {
        return collection.push(val)
    }
    this.dequeue = function() {
        return collection.shift();
    }
    this.front = function(val) {
        return collection[0]
    }
    this.size = function() {
        return collection.length
    }
    this.isEmpty = function() {
        return collection.length === 0;
    }
    // Only change code above this line
}

var queue = new Queue(); // creating object for queue class 
               
console.log(queue.isEmpty()); // returns true
  
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
console.log(queue.front()); // returns 10 
  
console.log(queue.dequeue()); // removes 10 from the queue. Now [20, 30, 40, 50, 60]  
console.log(queue.front()); // returns 20 
    
console.log(queue.print()); //prints 20 30 40 50 60 