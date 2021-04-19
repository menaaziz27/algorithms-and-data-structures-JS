function minSubArrayLen(arr, num) {
    let result = Infinity;
    let sum = 0;
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum >= num) {
            result = Math.min(Infinity, i + 1 - left);
            sum -= arr[left];
            left++;
        }
    }

    return result !== Infinity ? result : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));