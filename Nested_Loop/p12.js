//function masaiDivisors(left, right, k) {
//find prime number
var left=2;
    var right=10;
    var k=2;
    count=0;
    for(i=left; i<=right; i++)
    {
        if(i%k==0)
        count=count+1;
    }
    console.log(count);
//}



//function masaiDivisors(left, right, k) {
//find prime number
    for(var number = 2;number<=20; number++)
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
      }}
