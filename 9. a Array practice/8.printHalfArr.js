//print first half of arr

// var arr = ["A","B","C","D","E","F"]
// for(var i=0;i<= (arr.length-1)/2;i++){
//     console.log(arr[i])
// }

// console.log("   ")

//print second half of arr

// var arr = ["A","B","C","D","E","F"]
// var start = arr.length/2
// for(var i=start;i<=arr.length-1;i++){
// console.log(arr[i])
// }


console.log("   ")

//method 3
var arr = ["A","B","C","D","E","F","G"]
var bounceBack = 0

    if(arr.length % 2 == 0){
        bounceBack = arr.length/2
    }else{
        bounceBack = (arr.length+1) / 2
    }
for(var i=bounceBack;i<=arr.length-1;i++){
console.log(arr[i])
}
