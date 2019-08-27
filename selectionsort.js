const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = 0
    console.log(arr)

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }

    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr)

}

selectionSort(numbers);