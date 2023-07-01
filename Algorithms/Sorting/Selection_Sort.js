// Selection sort is a simple and efficient sorting algorithm that works by 
// repeatedly selecting the smallest (or largest) element from the unsorted portion of the list
//  and moving it to the sorted portion of the list. 

// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
    console.log("Unsorted array: " + arr);
	selectionSort(arr, n);
	console.log("Sorted array: " + arr);

    debugger
