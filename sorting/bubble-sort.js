function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

function swap(arr, index1, index2) {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	return arr;
}

console.log(bubbleSort([5, 3, 2, 4, 1, 6]));
