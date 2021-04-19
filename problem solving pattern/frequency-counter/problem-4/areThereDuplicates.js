function areThereDuplicates(...args) {
    let frequency = {};

    for (let i = 0; i < args.length; i++) {
        let element = args[i];
        frequency[element] = (frequency[element] || 0) + 1;
    }

    console.log(frequency);
    for (let element in frequency) {
        if (frequency[element] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true