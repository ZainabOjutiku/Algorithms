function reverse(str){
    var arr = str.split(',');
    console.log(arr);


    var temp = 0;
    for (let i = 0; i < arr.length/2;i++){
        temp = arr[i];
        arr[i]= arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
        console.log(arr);

    }
    console.log(arr.join(''));
};
reverse('a,b,c,d')

function reverse2(str){
    const reverse=[];
    const length = str.length-1;
    for (let i = length; i >=0; i--){
        reverse.push(str[i]);
    }
    console.log(reverse.join(''));

}
reverse2('a,b,c,d')