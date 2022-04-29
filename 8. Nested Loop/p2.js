







var bag = "";
for(var i=1; i<=5; i++)
{
  bag = bag + "hello ";
}
console.log(bag);





// Father expecting 5 sets
// 1 set = 10rounds


for(var father=1; father<=5; father++)
{

  console.log("Set",father);

  for(var son = 1 ; son<=10; son++)
  {
    console.log("Son has completed round : ",son);
  }

  console.log("-----Set Ends------");

}





for(var father=1; father<=10; father++)
{
  
  var jhola = "";
  for(var son=1; son<=10; son++)
  {
    jhola = jhola + "* ";
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







for(var father=1; father<=10; father++)
{
  
  var jhola = "";
  for(var son=1; son<=father; son++)
  {
    jhola = jhola + son+" ";
  }
  console.log(jhola);

}







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