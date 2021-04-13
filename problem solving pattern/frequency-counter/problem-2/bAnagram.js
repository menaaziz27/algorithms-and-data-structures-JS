function anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	let frequencyCounter = {};
	for (let char of str1) {
		frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
	}

	for (let char of str2) {
		if (!frequencyCounter[char]) {
			return false;
		} else {
			frequencyCounter[char] -= 1;
		}
	}
	return true;
}

// O(2n) => O(n)
console.log(anagram('anagram', 'margana'));
