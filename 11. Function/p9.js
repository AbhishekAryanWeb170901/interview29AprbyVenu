//Check whether a number is even or not


function check_odd(number)
{

  if(number%2==1)
  {
    console.log(number,"Odd");
  }
  else
  {
    console.log(number,"Even");
  }

}


for(var i=1; i<=10; i++)
{
  check_odd(i);
}

//practice
//check odd number
function check_even(number)
{
    if(number%2==0)
    {
        console.log(number,"=> Even")
    }
    else
    {
        console.log(number,"=> Odd");
    }
}
for(var z=1; z<=20; z++)
{
    check_even(z);
}




function check_odd(number)
{
    if(number%2==1)
    {
        console.log(number,"=> Odd")
    }
    else
    {
        console.log(number,"=> Even")
    }
}
for(var x=1; x<=20; x++)
{
    check_odd(x);
}