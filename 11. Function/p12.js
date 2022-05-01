// Problem 2: Use the above function to print the Primes from 2 to a given limit

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



var limit = 1000;

for(var i=2; i<=limit; i++)
{
  var x = checkPrime(i);
  
  if(x == true)
  {
    console.log(i,"It is prime");
  }
  else
  {
    console.log(i,"It is not prime");
  }
}