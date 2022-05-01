var names = ["rahul", "mohan", "kalidas", "surdas"];

for(var i = 0; i<=3; i++)
{
  console.log(names[i]);
}

var arr=["1","2","3","4"];
var sum_of_odd = 0;
var sum_of_even =0;
for(var i=0; i<=arr.length-1; i++) {
    if(arr[i]%2 !== 0){
        sum_of_odd = sum_of_odd  + arr[i];
    }
    for(var j=0; j<=arr.length-1; j++) {
    if(arr[j]%2===0){
        sum_of_even=sum_of_even+arr[j];
    }}}

     if(sum_of_odd > sum_of_even)   {
         console.log("Odd");
     }
     else{
         console.log("Even");
     }
