function accum(s) {
    var res = "";
    var data = s.split("")
    data.forEach((element, index) => {
        for (var i = 0; i < index + 1; i++) {
            if (i == 0)
                res += element.toUpperCase();
            else
                res += element.toLowerCase();
        }
        if (index != data.length - 1)
            res += "-"
    });
    return res;
}

console.log(accum("HbideVbxncC"));