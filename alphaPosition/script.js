function alphabetPosition(text) {
    var res = "";
    var a = "abcdefghijklmnopqrstuvwxyz".split("");
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    text.split("").forEach((element) => {
        if (element >= 'a' && element <= 'z') {
            res += a.indexOf(element) + 1 + " ";
        }
        if (element >= 'A' && element <= 'Z') {
            res += b.indexOf(element) + 1 + " ";
        }
    })
    return res.trim(" ");
}