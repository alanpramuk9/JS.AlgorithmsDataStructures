/*

    Pros versus an Array: 
        1) Dynamic size
            -size of the arrays is fixed: So we must know the upper limit on the number of 
             elements in advance. Memory assigned at runtime as opposed to comile time for arrays

        2) Ease of insertion/deletion
            -Inserting a new element in an array of elements is expensive, because room has 
              to be created for the new elements and to create room existing elements have to shifted
    Drawbacks: 
        1) Random access is not allowed. We have to access elements sequentially starting from the first node
        2) Extra memory space for a pointer is required with each element of the list
        3) Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.
         -accessing an element array is faster but insertions and deletion is slower
        */


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end of list 
    add(element) {
        // creates a new node 
        var node = new Node(element);

        // to store current node 
        var current;

        // if list is Empty add the element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }
    // insert element at the position index // of the list 
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(element);
            var curr, prev;
            curr = this.head;

            // add the element to the first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    // removes an element from the // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }

    // removes a given element from the // list 
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current element if found then return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    /* HELPER FUNCTIONS */
    // finds the index of element 
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list with given element 
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
        // not found 
        return -1;
    }

    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }

    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}


var ll = new LinkedList(); // creating an object for the Linkedlist class 

console.log(ll.isEmpty()); // testing isEmpty on an empty list returns true 

ll.add(10); // adding element to the list 

ll.printList(); // prints 10 
 
console.log(ll.size_of_list()); // returns 1

// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 

ll.printList(); // returns 10 20 30 40 50 

console.log("is element removed ?" + ll.removeElement(50)); // prints 50 from the list 

ll.printList(); // prints 10 20 30 40 
 
console.log("Index of 40 " + ll.indexOf(40)); // returns 3

// insert 60 at second positon; ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 

ll.printList(); 
 
console.log("is List Empty ? " + ll.isEmpty()); // returns false
 
console.log(ll.removeFrom(3)); // remove 3rd element from the list

ll.printList(); // prints 10 20 60 40 
