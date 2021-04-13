function sameSquared(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let key of arr1) {
		frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
	}
	console.log(frequencyCounter1);
	for (let key of arr2) {
		frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
			return false;
		}
	}
	return true;
}
// O(n)
console.log(sameSquared([1, 3, 2, 3], [1, 9, 4, 9]));
