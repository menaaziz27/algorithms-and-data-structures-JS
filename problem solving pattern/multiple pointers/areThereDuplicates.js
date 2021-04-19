// multiple pointers
function areThereDuplicates(...args) {
    let sortedArray = args.sort();
    let left = 0;
    let right = 1;
    while (right < sortedArray.length) {
        if (sortedArray[left] !== sortedArray[right]) {
            left++;
            right++;
        } else {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 2, 3, 3));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));