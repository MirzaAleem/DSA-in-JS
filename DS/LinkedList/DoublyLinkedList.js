//In Doubly Linked List Traversal of items can be done in both forward and backward directions 
//as every node contains an additional prev pointer that points to the previous node.

/*// We create a class for each node */
class Node{
    constructor(val){
        // Constructor to create a new node
        // next and prev is by default initialized as null
        this.prev = null
        this.val = val
        this.next = null
    }
}

// We create a class for the Doubly Linked List
class DoublyLinkedList{
    // The list has three properties, the head (first element of the list),
    // the tail (last element of the list) and the list size
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // The push method takes a value as parameter 
    //and assigns it as the tail of the list
    push(val) {
        const newNode = new Node(val)
        if(!this.head){              //If new node is first node
            this.head = newNode        
            this.tail = newNode
        } else{                      //if it is not the first node
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this.print()
    }

    // The pop method removes the tail of the list
    pop() {
        if (!this.head) return console.log('List is already empty !')
        let current = this.head
        let newTail = current
        while (current.next) {    //Traversing till tail node
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return console.log('Node with Value ' + current.val + ' is deleted')
    }

    // To print the values of the linked list
    print(){
        let curr = this.head
        let val = '' 
        while(curr){
            val+= curr.val 
            curr = curr.next
            if(curr) val+= ' <-> '
        }
        return console.log(val)
    }
}
const list = new DoublyLinkedList()
debugger