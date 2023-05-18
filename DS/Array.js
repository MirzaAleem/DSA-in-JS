//An array is a collection of items stored at contiguous memory locations.
// One-dimensional Array

let arr1 = [1,2,3];
console.log("This is 1D array : ");
console.log(arr1);

//Two-Dimensional Array

const arr = new Array(6);    //For creating 6 rows

for(let i = 0; i < arr.length; i++) {
  arr[i] = new Array(8,65,4,3,2)        //for creating 5 columns
}

console.log("This is 2D array : ");
console.log(arr);

