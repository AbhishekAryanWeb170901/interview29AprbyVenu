


function check_even(number)
{

  if(number%2==0)
  {
    return "even";
  }
  else
  {
    return "odd";
  }

}

var z=check_even(23);
console.log(z);


function check_even(number)
{
  
  if(number%2==0)
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

var output = check_even(10);

if(output == true)
{
  console.log("Number is even");
}
else
{
  console.log("Number is odd");
}