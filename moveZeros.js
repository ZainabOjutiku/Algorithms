//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.



function movezero(arr) {
    console.log(arr.length - 1);
    count = 0;
    var i = 0;
    var count = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            count++
            console.log("final", arr);


        } else {
            i++

        }
    }
    console.log("final", arr);
    console.log(count)
    for (var i = 0; i < count; i++) {
        arr.push(0)
    }
    console.log(arr)

}

movezero([0, 1, 0, 2, 0, 0, 5])