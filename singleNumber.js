// Given a non-empty array of integers, every element appears twice except for one. Find that single one.Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

function singleNum(arr){
    for(var i = 0; i < arr.length; i++){
        if( arr[i]!= arr[i+1]){
            console.log(arr[i+1]);
        }
    }
};
singleNum([2,2,1,1,5])