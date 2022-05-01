// Problem 1: Create a function to check if a number is Prime or Not



// function checkPrime(number)
// {

//   var count = 0;
//   for(var i=1; i<=number; i++)
//   {
//     if(number % i == 0)
//     {
//       count++;
//     }
//   }
  
//   if(count==2)
//   {
//     console.log(number,"Prime");
//   }
//   else
//   {
//     console.log(number,"Not Prime");
//   }
    
// }



// checkPrime(7);





function checkPrime(number)
{
  
  var count = 0;
  for(var i=1; i<=number; i++)
  {
    if(number % i == 0)
    {
      count++;
    }
  }
    
  if(count==2)
  {
    return true;
  }
  else
  {
    return false;
  }
      
}



var x = checkPrime(7);
if(x==true)
{
  console.log("It is prime");
}
else
{
  console.log("It is not prime");
}