//min & max in arr

var arr = [-10, -90, 96, 108, 1008, 6]
var max = - Infinity
var min = Infinity
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log("Max :",max, "Min :", min)



