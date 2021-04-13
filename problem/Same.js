// Naive solution
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		// indexOf loop through the whole array
		let index = arr2.indexOf(arr1[i] ** 2);
		if (index === -1) {
			return false;
		}
		arr2.splice(index, 1);
	}
	return true;
}
// O(n^2)
console.log(same([1, 3, 2, 4], [1, 4, 16, 9]));
