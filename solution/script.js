function solution(str, ending) {
    //solution 1
    return str.substr(str.length - ending.length) === ending

    //solution 2
    return ending == "" ? res = true : res = str.slice(-(ending.length)) === ending
}
console.log(solution('abcde', ''));
//substr

    // solution

    // ***********substr*******************
    // "Hello world!".substr(2) ==> llo world!
    // "Hello world".substr(1, 5) => ello


    //*********slice ************
    // "abcde".slice(-2) ==> "de"