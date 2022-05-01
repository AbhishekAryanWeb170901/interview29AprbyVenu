//print all element except E

var arr = ["A","B","C","D","E","F"]
for(var i=0;i<=arr.length-1;i++){
if(arr[i] == "E" || arr[i] == "B"){
    continue;
}
    console.log(i, arr[i])
}
