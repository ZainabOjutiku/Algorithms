function purchase(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split(" ");
        console.log(temp)
        var budget = parseInt(temp[0]);
        var cost = parseInt(temp[1]);
        var m = parseInt(temp[2]);
        console.log(budget, cost, m)
        let Total = budget / cost;
        console.log("total", Total)
        var t = Total;
        while (t >= m) {
            var Remender= t % m
            t = t / m;
            t = t + Remender;
            console.log('remender added to total', t)
            Total = Total + t

        }
        console.log(Total);
    }
}
purchase(['4 1 2', '8 1 2', '10 2 5', '12 4 4']);