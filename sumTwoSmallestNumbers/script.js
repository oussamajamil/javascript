function sumTwoSmallestNumbers(numbers) {
    var res = 0;
    a = Math.min(...numbers);
    res += a
    numbers.splice(numbers.indexOf(a), 1),
        res += Math.min(...numbers);
    return res;
}
console.log(sumTwoSmallestNumbers([1, 2, 4, 3, 9, 5,]));