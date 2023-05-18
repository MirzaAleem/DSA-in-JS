//A linked list is a linear data structure which 
//consists of nodes where each node 
//contains a data field and a reference(link) to the next node in the list.

//In singly linked lists each node has a single pointer
//that indicates the next node on the list.

// We create a class for each node within the list
class Node{
    // Each node has two properties, 
    //its value and a pointer that indicates the node that follows
    constructor(val){
        this.val = val
        this.next = null
    }
}

// We create a class for the list
class SinglyLinkedList{
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
        if (!this.head){            //if new_node is first node
            this.head = newNode
            this.tail = this.head
        } else {                    //if it is not the first node
            this.tail.next = newNode
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
        return current
    }

    // The shift method removes the head of the list
    shift(){
        if(!this.head) return console.log('List is already empty !')
        const prevHead = this.head
        this.head = prevHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return prevHead
    }

    // The unshift method takes a value as parameter and assigns it as the head of the list
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this.print()
    }

    // The get method takes an index number as parameter and returns the value of the node at that index
    get(index) {
        if(index < 0 || index >= this.length) return console.log('undefined Index')
        else{
            let counter = 0 
            var current = this.head
            while(counter !== index){
                current = current.next
                counter++
            }
        }
        return current
    }

    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index,val){
        const foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            console.log("Value has been modified !")
            return this
        }
        return console.log("No node found at the index !")
    }

    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
    // Note- The previous node at that index (if available) will become the successive node.
    insert(index,val){
        if(index < 0 || index > this.length) return console.log('Invalid Index')
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        else{
            const newNode = new Node(val)
            const prevNode = this.get(index-1)
            newNode.next = prevNode.next
            prevNode.next = newNode
            this.length++
            return console.log('Node inserted at index ' + index) 
        }
    }

    // The remove method takes an index number as parameter and removes the node at the given index in the list
    remove(index){
        if(index < 0 || index >= this.length) return console.log('Invalid Index')
        if(index === 0) return this.shift(val)
        if(index === this.length) return this.pop(val)
        else{
            const prevNode = this.get(index-1)
            prevNode.next = prevNode.next.next
            this.length--
            return console.log('Node removed from index ' + index) 
        }
    }

    // The reverse method reverses the list and all pointers
    // so that the head becomes the tail and the tail becomes the head
    reverse(){
        let prev = null, next
        let curr = this.head
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return this.print()
      }
   
    // To print the values of the linked list
    print(){
        let curr = this.head
        let val = '' 
        while(curr){
            val+= curr.val 
            curr = curr.next
            if(curr) val+= ' -> '
        }
        return console.log(val)
    }
}

const LList = new SinglyLinkedList()
LList.push(10)
LList.push(20)
LList.push(30)

debugger