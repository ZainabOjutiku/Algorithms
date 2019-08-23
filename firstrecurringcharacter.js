function firstRecurringCharacter(arr) {
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        if ([arr[i]] in obj) {
            console.log("found", arr[i])
            return arr[i]
        } else
            obj[arr[i]] = i

    }
    console.log(obj)
}
//Bonus... What if we had this:
firstRecurringCharacter([2, 1])