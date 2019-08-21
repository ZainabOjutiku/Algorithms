

function unshift(arr,num) {
    
    arr[arr.length] = arr[arr.length-1];
     
      for(let i = 1;i < arr.length;i++){
        arr[arr.length-i]=arr[arr.length-i-1]
        
      }
      arr[0]=num
          console.log(arr)
    
    }
    function unshift2(arr,num){
      arr.push(num)
      var temp = 0;
      for(let i = 1;i < arr.length;i++){
        temp = arr[arr.length-i];
        arr[arr.length-i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
      }
      console.log(arr)

    }
unshift([1,2,3,4],5);