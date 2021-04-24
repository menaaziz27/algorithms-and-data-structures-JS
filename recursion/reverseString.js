function reverse(str) {
    if (str.length === 1) return str[0];

    return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}

console.log(reverse('awesome'));
// output: emosewa