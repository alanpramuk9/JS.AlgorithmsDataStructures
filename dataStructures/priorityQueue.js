/*
    Priority Queue is an extension of Queue having the following properties
        -Each element of the priority queue has an property associated with it.
        -Elements are added to the queue as per the priority.
        =Lowest priority elements are removed first.
*/

// User defined class to store element and its priority 
class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 
  
// PriorityQueue class 
class PriorityQueue { 
    // An array is used to implement priority 
    constructor() { 
        this.items = []; 
    } 
    
    //adds an element to the queue according to its priority
    enqueue(element, priority) { 
        // creating object from queue element 
        var qElement = new QElement(element, priority); 
        var contain = false; 
        
        // iterating through the entire item array to add element at the correct location of the Queue 
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].priority > qElement.priority) { 
                // Once the correct location is found it is enqueued 
                this.items.splice(i, 0, qElement); 
                contain = true; 
                break; 
            } 
        } 
        // if the element has the highest priority it is added at the end of the queue 
        if (!contain) { 
            this.items.push(qElement); 
        } 
    }

    //Removes an element from the priority queue
    dequeue() { 
        // return the dequeued element and remove it. 
        if (this.isEmpty()) {
            return "Underflow"; 
        }
        return this.items.shift(); 
    }

    // returns the highest priority element in the Priority queue without removing it.
    front() {  
        if (this.isEmpty()) {
            return "No elements in Queue"; 
        }
        return this.items[0]; 
    } 
    
    // returns the lowest priorty element of the queue
    rear() {  
        if (this.isEmpty()) {
            return "No elements in Queue"; 
        }
        return this.items[this.items.length - 1]; 
    } 

    // return true if the queue is empty.
    isEmpty() {  
        return this.items.length == 0; 
    } 
    
    //prints the element of the queue as per the priority starting from highest to lowest
    printPQueue() { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i].element + " "; 
        return str; 
    } 

} 


var priorityQueue = new PriorityQueue(); // creating object for queue classs 
  
// testing isEmpty and front on an empty queue 
console.log(priorityQueue.isEmpty());  // return true 
  
console.log(priorityQueue.front()); // returns "No elements in Queue" 
  
// adding elements to the queue 
priorityQueue.enqueue("Alan", 2); 
priorityQueue.enqueue("Meghan", 1); 
priorityQueue.enqueue("Justin", 1); 
priorityQueue.enqueue("Bobby", 2); 
priorityQueue.enqueue("Hannah", 3); 
  
console.log(priorityQueue.printPQueue()); // prints [Meghan Justin Alan Bobby Hannah] 
  
console.log(priorityQueue.front().element); // prints Meghan 
  
console.log(priorityQueue.rear().element); // pritns Hannah 
  
// removes Meghan
console.log(priorityQueue.dequeue().element); //[Justin Alan Bobby Hannah] 
  
// Adding another element to the queue 
priorityQueue.enqueue("Jane", 2); 
  
console.log(priorityQueue.printPQueue()); // prints [Justin Alan Bobby Jane Hannah] 