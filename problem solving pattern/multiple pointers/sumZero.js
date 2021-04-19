function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

let sortedArray = [-3, -2, -1, 0, 2, 4, 6];

console.log(sumZero(sortedArray));