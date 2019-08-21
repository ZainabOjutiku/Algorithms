function unshift(arr,num){
    arr[arr.length] = arr[arr.length-1];
      console.log(arr);
      for(let i = 1;i < arr.length;i++){
        arr[arr.length-i]=arr[arr.length-i-1]
        console.log (arr[arr.length-i],arr[arr.length-i-1])
        
        console.log(arr)
      }
      arr[0]=num
          console.log(arr)
    
    }
    function unshift2(arr,num){
      arr.push(num)
      console.log(arr)
      var temp = 0;
      for(let i = 1;i < arr.length;i++){
        temp = arr[arr.length-i];
        arr[arr.length-i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
        console.log(arr)
      }
    }
    unshift2([1,2,3,4],5)