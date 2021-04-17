function countUnique(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	let j = 1;
	let end = arr.length;
	while (j < end) {
		if (arr[i] === arr[j]) {
			j++;
		} else {
			i++;
			arr[i] = arr[j];
			j++;
		}
	}

	return i + 1;
}

let sortedArray = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// let sortedArray = [];

console.log(countUnique(sortedArray));
