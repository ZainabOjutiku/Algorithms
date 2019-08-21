const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  console.log(array)
  console.log('left:', left);
  console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
 )
}

function merge(left, right){
  const result = [];
  let l = 0;
  let r = 0;
  while(l < left.length && 
        r < right.length){
     if(left[l] < right[r]){
       result.push(left[l]);
        console.log("result",result)

       l++;
     } else{
       result.push(right[r]);
       console.log("result",result)
       r++
    }
  }  
  console.log(left, right)
  console.log( result.concat(left.slice(l)).concat(right.slice(r)));
  return result.concat(left.slice(l)).concat(right.slice(r));
}


const answer = mergeSort(numbers);
console.log(answer);