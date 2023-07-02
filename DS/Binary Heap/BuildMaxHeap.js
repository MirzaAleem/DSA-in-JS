function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest])
      largest = left;
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest])
      largest = right;
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
      heapify(arr, n, largest); // Recursively heapify the affected sub-tree
    }
  }
  
function BuildMaxHeap(arr) {
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  