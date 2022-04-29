// var i=1;
// var end=20;
// var sum=0;
// while(i<=end){
//     if(i%2==1) {
//         sum=sum+i}
//         i++;}
//         console.log(sum);

// //

//     var guest = 1;
// while(guest <= 10)
// {
//    guest++;
//   if(guest == 4)
//   {
//     console.log("Bomb Blast");
//     continue;
//   }
//   console.log("Guest",guest);
// }





// var i = 0;
// while(i<=8)
// {

//   i++;
//   if(i==6)
//   {
//     continue;
//   }
//   console.log(i);
  
// }



var i = 1;
while(i<=8)
{
  i++;{
if(i==6) 
    continue;
  }
  console.log(i);
 
}





var start = 1;
var sum = 0;

while(start<=15)
{
  if(start%3 == 0)
  {
    sum = sum + start;
  }

  start++;
}

console.log(sum);



var number1=11;

function checkPrime(number1) {
  if (number1 <= 1) {
    return false;
  } else {
    for (let i = 2; i < number1; i++) {
      if (number1 % i == 0) {
        return false;
      }
    }
    return true;
  }
}