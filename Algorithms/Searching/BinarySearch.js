// Binary search function
const binarySearch = (arr, target) => {
    let start = 0;                     // Left pointer
    let end = arr.length - 1;       // Right pointer

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);   // Calculate the middle index

        if (arr[mid] === target) {
            return mid;                              // Target value found at mid index
        } else if (arr[mid] < target) {
            start = mid + 1;                          // Discard left half of the array
        } else {
            end = mid - 1;                         // Discard right half of the array
        }
    }

    return -1;                                      // Target value not found in the array
};

// Example usage
const array = [1, 2, 4, 5, 7, 9];
const targetValue = 7;

// Call the binary search function and store the result
const resultIndex = binarySearch(array, targetValue);

// Check if the target value was found
if (resultIndex !== -1) {
    console.log(`Target value ${targetValue} found at index ${resultIndex}`);
} else {
    console.log(`Target value ${targetValue} not found in the array`);
}
