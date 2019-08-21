function steps(n, k){
    var sum = 0;
    var badstep = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i;
        if (sum == k) {
            badstep = sum;
        }
        console.log(sum)

    }
    if (badstep == k) {
        sum = sum - 1;
        console.log(sum)
        return sum;
    } else {
        console.log(sum)
        return sum;
    }
}

// Better solution with 0(1)
function steps(n, k) {
    var sum = (n * (n + 1) / 2)
    console.log('numberofsteps', sum);
    var badS = (-1 + Math.sqrt(1 - (4 * 1 * -(2 * k)))) / 2
    console.log("badstep is", badS);
    if (Number.isInteger(badS)) {
        sum = sum - 1;
        return sum;
    } else {
        return sum;
    }

}


steps(8, 6)