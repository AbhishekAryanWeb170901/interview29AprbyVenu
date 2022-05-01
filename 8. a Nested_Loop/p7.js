


for(var father=10; father>=1; father--)
{
  var jhola = "";
  for(var son=1; son<=father; son++)
  {
    jhola = jhola + "* ";
  }
  console.log(jhola);
  
}









for(var father=10; father>=1; father--)
{
    
  var jhola = "";
  for(var son=1; son<=father; son++)
  {
    jhola = jhola + son+" ";
  }
  console.log(jhola);
  
}








for(var father=1; father<=10; father++)
{
    
  var jhola = "";
  for(var son=1; son<=father; son++)
  {
    jhola = jhola + "* ";
  }
  console.log(jhola);
  
}




for(var father=9; father>=1; father--)
{
  var jhola = "";
  for(var son=1; son<=father; son++)
  {
    jhola = jhola + "* ";
  }
  console.log(jhola);
  
}






// for(var father = 1; father<=10; father++)
// {
//   var bag = "";
//   for(var son=1; son<=10; son++)
//   {
//     bag = bag + "* ";
//   }
//   console.log(bag);
// }


var father=1;
while(father<=10)
{
  var son=1;
  var jhola = "";
  
  while(son<=10)
  {
    jhola = jhola + "* ";
    son++;
  }
  
  console.log(jhola);
  father++;
  
}

// ctrl / : comment or uncomment






// Using Break


for(var sultan=1; sultan<=10; sultan++)
{
  
  console.log("------Story Start------")
  for(var bahuballi = 1; bahuballi<=10; bahuballi++)
  {
    
    if(bahuballi>sultan)
    {
      break;
    }
    
    console.log("Sultan = "+sultan+" Bahuballi= "+bahuballi);
  }
  console.log("------Story End------\n");
}