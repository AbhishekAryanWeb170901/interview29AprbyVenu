//find sum and avg

var arr = [12,44,63,80,90,102,68]
var sum = 0;
var count = 0;
for(var i=0;i<=arr.length-1;i++){
    count++
    sum += arr[i]
}
var avg = sum/count
console.log(sum)
console.log(avg)