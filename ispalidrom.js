function reverse(st) {
    // var str = "";
    var str = String(st)
    console.log(str);
    var newstr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    if (newstr[newstr.length - 1] == "-") {
        console.log(parseInt(newstr.substring(0)) * -1);
        return parseInt(newstr.substring(0, newstr.length)) * -1;
    }
    else {
        console.log(newstr);
        return newstr;
    }
}
reverse(-123);

