//find sum from 1 to 5
// var i=1;
// while(i<=10) {
//     sum=sum+i; }
//     sum++; {
// console.log(sum); 
// }


//sum from 1 to 50 using For Loop
sum = 0;
for (i = 1; i <= 50; i++) {
  sum = sum + i;
}
console.log(sum);
console.log("🐼🐼🐼🐼🐼🐼🐼");
//using While loop find sum from 1 to 50.
var i = 1;
sum = 0;
while (i <= 50) {
  sum = sum + i;
  i++;
}
console.log(sum);

console.log("🐼🐼🐼🐼🐼🐼🐼");

//   //find sum from 1 to 50 using While Loop 
//   //add every number thrice.
//   var i=1;
// sum=0;
// while(i<=50){
//     if(i==i+i+i){
//   sum=sum+i;
//   i++;}
//   console.log(sum);}


var start = 0;
var end = 20;
while (start <= end) {
  if (start % 2 == 1) {
    console.log(start);
  }
  start++;
}

var suru = 1;
var ruko = 20;
sum = 0;
while (suru <= ruko) {
  if (suru % 2 == 0) {
    sum = sum + suru;
    sum++;
  }
  console.log(sum);
}
