function binarySearch(arr, target, low, high) {
	let mid = Math.floor((low + high) / 2);
	if (target === arr[mid]) {
		return mid;
	} else if (target < arr[mid]) {
		return binarySearch(arr, target, low, mid - 1);
	} else {
		return binarySearch(arr, target, mid + 1, high);
	}
	return -1;
}

let myarr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(myarr, 5, 0, myarr.length - 1));
