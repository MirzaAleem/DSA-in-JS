// A stack is a data structure that follows the Last-In-First-Out (LIFO) principle,
// where the last item added is the first one to be removed.

//Initialize an empty stack class
class Stack {
    constructor() {
      this.items = [];
    }

    // size Returns the number of elements in the stack.
    size() {
        return this.items.length;
      }

    // isEmpty Checks if the stack is empty and returns a boolean value.
    isEmpty() {
        return this.items.length === 0;
      }      

    // Push method adds an element to the top of the stack.
    push(element) {
        this.items.push(element);
    }
    
    // Pop method Removes and returns the element from the top of the stack.
    pop() {
        if (this.isEmpty()) {
          return "Stack is empty";
        }
        return this.items.pop();
      }
      
      // Peek method returns the element from the top of the stack without removing it.
      peek() {
        if (this.isEmpty()) {
          return "Stack is empty";
        }
        return this.items[this.items.length - 1];
      }

}

const stack = new Stack();

console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.size()); // Output: 1
console.log(stack.peek()); // Output: 10
debugger