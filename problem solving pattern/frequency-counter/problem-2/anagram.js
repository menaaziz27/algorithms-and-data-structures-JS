function anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let char of str1) {
		frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}
	for (let char of str2) {
		frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key]) {
			return false;
		}
	}
	return true;
}
// O(3n) => O(n)
console.log(anagram('anagram', 'margana'));
