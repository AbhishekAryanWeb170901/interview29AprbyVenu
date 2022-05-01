// Problem 4: Write a function to check if the char is a small case or not.



function checkSmallCase(char)
{
  var lower = "abcdefghijklmnopqrstuvwxyz";
  
  for(var i=0; i<lower.length; i++)
  {
    if(lower[i]==char)
    {
      return true;
    }
  }
  
  return false;
    
}


var x = checkSmallCase("C");

if(x==true)
{
  console.log("It is small case");
}
else
{
  console.log("It is not small case");
}
