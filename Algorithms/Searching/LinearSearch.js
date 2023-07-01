// Linear search function
const linearSearch = (arr, target) => {
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the target
        if (arr[i] === target) {
            // Return the index of the target if found
            return i;
        }
    }
    // Return -1 if the target is not found in the array
    return -1;
};

// Example usage
const array = [5, 2, 9, 1, 7, 4];
const targetValue = 7;

// Call the linear search function and store the result
const resultIndex = linearSearch(array, targetValue);

// Check if the target value was found
if (resultIndex !== -1) {
    console.log(`Target value ${targetValue} found at index ${resultIndex}`);
} else {
    console.log(`Target value ${targetValue} not found in the array`);
}
