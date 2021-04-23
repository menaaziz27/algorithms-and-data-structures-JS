function productOfArray(arr) {
    let result = 1;

    function helper(inputArr) {
        if (inputArr.length === 0) return;

        result *= inputArr[0];

        return helper(inputArr.slice(1));
    }

    helper(arr);

    return result;
}

console.log(productOfArray([1, 2, 3, 10]));
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60