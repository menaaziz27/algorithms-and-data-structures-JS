function collectOddValues(arr) {
    let result = [];

    function helper_input(input) {
        if (input.length === 0) return;

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        return helper_input(input.slice(1));
    }

    helper_input(arr);

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// output: [ 1, 3, 5, 7, 9 ]