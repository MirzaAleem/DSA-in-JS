// Heap Sort: Once the max heap is built, the largest element will be at the root of the heap (index 0). 
// We swap it with the last element in the array and reduce the heap size by 1. 
// Then, we heapify the root element to maintain the heap property. 
// Repeat this process until the array is sorted.

function heapSort(arr) {
    const n = arr.length;
  
    BuildMaxHeap(arr);
  
    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
      // Swap the current root (largest element) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Reduce heap size and heapify the root element
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
const array = [7, 3, 9, 2, 5, 1, 8, 6, 4];
console.log("Original array:", array);

const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);
debugger
