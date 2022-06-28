function persistence(num) {
    var a = (num + "").toString().split("");
    if (a.length === 1) {
        return 0
    }
    else {
        var b = a.reduce((a, b) => a * b);
        return 1 + persistence(b);

    }
}


//Use Recursion
// Recursion is the process which comes into existence when a function calls a copy of itself to work 
// on a smaller problem. Any function which calls itself is called recursive function,
//  and such function calls are called recursive calls.
//  Recursion involves several numbers of recursive calls.


//USE reduce => 



// The reduce() method executes a reducer function for array element
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements. 
// The reduce() method does not change the original array.
