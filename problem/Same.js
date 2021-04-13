// Naive solution
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let index = arr2.indexOf(arr1[i] ** 2);
			if (index === -1) {
				return false;
			} else {
				arr2.splice(index, 1);
				break;
			}
		}
	}
	return true;
}

console.log(same([1, 3, 2, 4], [1, 4, 16, 9]));
