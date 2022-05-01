// Prime Numbers from 2 to 100


for(var number = 2;number<=100; number++)
{

      var factors = 0;

      for(var i=1; i<=number; i++)
      {
        if(number % i == 0)
        {
          factors++;
        }
      }

      if(factors==2)
      {
        console.log(number,"It is prime");
      }
      else
      {
        console.log(number,"Not prime");
      }

}