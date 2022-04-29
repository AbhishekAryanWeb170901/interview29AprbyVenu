
// var arr=[1,2,3,4]
// var bag="";
// for(var i=0; i<arr.length; i++)
// {
//     bag+=arr[i]+1+" ";
// }
//  console.log(bag);


// var arr = [12,23,45,67,2,9]
// var jhola = "";
// for(var i=arr.length-1;i>=0;i--){
//     jhola = jhola + arr[i] + " ";
// }
// console.log(jhola)



    var min = Infinity
    var arr = [1,2,3,4,5,8]
    for(var i=0; i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i]+1
            }
    }
        console.log(min);

