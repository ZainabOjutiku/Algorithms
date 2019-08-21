function maxsubArray(arr) {

    for (var i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], (arr[i] + arr[i - 1]))
    }
    var sum = Math.max(...arr)
    console.log(sum)
}
maxsubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])