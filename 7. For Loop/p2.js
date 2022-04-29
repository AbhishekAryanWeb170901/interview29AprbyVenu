//every time double the number
for(var i=1; i<=100; i=i*2)
{
  console.log(i);
}


// Reverse Loop from 5 to 1


// for(var i=5; i>=1; i--)
// {
//   console.log(i);
// }


var bag="";
for(var i=5; i>=1; i--)
{
  bag = bag + i+" ";
}
console.log(bag);


// Reverse a number
var bag="";
for(var i=10; i>=1; i--)
{
  bag = bag + i+" ";
}
console.log(bag);




// Break 
for(var guest = 1; guest<=10; guest++)
{
  if(guest==3)
  {
    break;
  }
  console.log("Guest",guest,"got the train");
}




for(var guest = 1; guest<=10; guest++)
{
  console.log("Guest",guest,"got the train");
  
  if(guest==3)
  {
    break;
  }
  
}




//continue
for(var guest = 1; guest<=10; guest++)
{
  if(guest==3)
  {
    continue;
  }
  console.log("Guest",guest,"got the train");
}




for(var guest = 1; guest<=10; guest++)
{
  console.log("Guest",guest,"got the train");
 
  if(guest==3)
  {
    continue;
  }
  
}




for(var guest = 1; guest<=10; guest++)
{
  if(guest>=3)
  {
    continue;
  }
  console.log("Guest",guest,"got the train");
}