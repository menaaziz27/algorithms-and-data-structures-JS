function isSubsequence(str1, str2) {

    if (str1.length > str2.length) return false;

    let i = 0;
    let j = 0;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('abc', 'aebdcf')); // true
console.log(isSubsequence('abc', 'acb')); // false