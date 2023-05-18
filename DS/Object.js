//Object is a collection of key-value pairs. 

const obj = {
    prop1: "I'm",
    prop2: "an",     //values are properties
    prop3: function() {
        console.log("I'm a property dude!")
    }                                 //Functions are methods
}

//Accessing object properties
console.log(obj.prop1) // "Hello!" 
//OR
console.log(obj["prop2"]) // "Hello!"

console.log(obj["prop3"]) //To access methods we call object.method().
obj.prop3() //This is correct way
