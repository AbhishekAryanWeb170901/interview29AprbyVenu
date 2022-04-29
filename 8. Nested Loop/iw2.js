// Print prime number from 1 to 30.

for(var number=2; number<=30; number++)
{
    var prime_counter=0;
    for(var x=1; x<=number; x++)
    {
        if(number%x==0)
        prime_counter++;
    }
    if(prime_counter==2)
    {
        console.log(number,"This Number is Prime")
    }
    else{
        console.log(number,"This Number is Non-Prime")
    }
}