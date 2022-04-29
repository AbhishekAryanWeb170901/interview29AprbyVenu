// Find whether a number is prime or not


for(var number = 2; number<=1000; number++)
{
  
      var factors = 0;
      
      for(var i=1; i<=number; i++)
      {
        if(number % i==0)
        {
          factors++;
        }
      }
      
      if(factors == 2)
      {
        console.log(number,"is prime");
      }
    
}





for(var i = 0; i<5; i++) 
{ var bag = ""; 
 for(var j=0; j<=i; j++) 
 { bag = bag + "*"; } 
 console.log(bag); 
} 