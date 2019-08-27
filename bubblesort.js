const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
  for (var i = 0; i< arr.length; i++){
    for (var j = 0; j <arr.length-i; j ++){
      if (arr[j]> arr[j+1]){
        var temp = arr [j];
        arr [j]= arr[j+1];
        arr[j+1]= temp;
      }
    }
  }

}

bubbleSort(numbers);
console.log(numbers);