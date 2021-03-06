function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    if (arr.length === 0) return false;
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;
        if (average === target) {
            return true;
        } else if (average > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3, 4, 5], 2)); // true
console.log(averagePair([1, 2, 3, 4, 5], 6)); // false