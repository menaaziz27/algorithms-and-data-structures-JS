function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let num of num1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
    }

    for (let num of num2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
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

console.log(sameFrequency(123, 521)); // false
console.log(sameFrequency(63453, 35436)); // true
console.log(sameFrequency(127893, 789321)); // true
console.log(sameFrequency(1278193, 7893721)); // false