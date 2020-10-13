module.exports = function reverse(n) {
    let string = n.toString();
    if (string[0] === '-') {
        string = string.slice(1, string.length);
        n = string.split('').reverse().join('');
        return Number(n);
    }

    n = n.toString().split('').reverse().join('');
    return Number(n);
}
