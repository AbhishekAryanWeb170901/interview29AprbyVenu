// Using Break


for(var sultan=1; sultan<=10; sultan++)
{
  
  console.log("------Story Start------")
  for(var bahuballi = 1; bahuballi<=10; bahuballi++)
  {
    
    if(bahuballi == sultan)
    {
      continue;
    }
    
    console.log("Sultan = "+sultan+" Bahuballi= "+bahuballi);
  }
  console.log("------Story End------\n");
}








for(var father=1; father<=10; father++)
{
    
  var jhola = "";
  for(var geeta=1; geeta<=father; geeta++)
  {
    jhola = jhola + "* ";
  }
  console.log(jhola);
  
  
  var jhola1 = "";
  for(var babita=1; babita<=father; babita++)
  {
    jhola1 = jhola1 + "$ ";
  }
  console.log(jhola1);
  
  
  
}