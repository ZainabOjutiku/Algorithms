function duplicate(arr) {
    var newset = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (newset.has(arr[i])) {
            return true

        } else {
            newset.add(arr[i]);
            console.log(newset);
        }
    }
    return false

}
duplicate([4, 5, 6])

