function buildingStr(num,arr){
    let str = arr[0]
    let i = 1;
    while(i != arr.length){
      if(( str + " " + arr[i]).length < num){
        str += " " + arr[i];
      }else if((str + " " + arr[i]).length == num){
        console.log(str)
        if(i < arr.length - 1){
          str = arr[i+1]
          i++
        } else {
          i++
        }
      } else {
        console.log(str)
        str = arr[i]
      }
      i++
    }
  }
  buildingStr(11,['abc','xyz','foobar','cuckoo','seven','hello'])