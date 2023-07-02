//  Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards
//  in your hands. The array is virtually split into a sorted and an unsorted part. 
//  Values from the unsorted part are picked and placed at the correct position in the sorted part.

// Implementation of Insertion Sort
function insertionSort(inputArr) {
    let n = inputArr.length;

        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let value = inputArr[i];

            // The last element of our sorted subarray
            let index = i-1; 
            while ((index > -1) && (value < inputArr[index])) {
                inputArr[index+1] = inputArr[index];
                index--;
            }
            inputArr[index+1] = value;
        }
    return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr);
debugger