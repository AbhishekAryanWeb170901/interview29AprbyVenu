// Using Continue


for(var sultan=1; sultan<=10; sultan++)
{
  
  console.log("------Story Start------")
  for(var bahuballi = 1; bahuballi<=10; bahuballi++)
  {
    
    if(bahuballi>sultan)
    {
      continue;
    }
    
    console.log("Sultan = "+sultan+" Bahuballi= "+bahuballi);
  }
  console.log("------Story End------\n");
}





// Using Break


for(var sultan=1; sultan<=10; sultan++)
{
  
  console.log("------Story Start------")
  for(var bahuballi = 1; bahuballi<=10; bahuballi++)
  {
    
    if(bahuballi == sultan)
    {
      break;
    }
    
    console.log("Sultan = "+sultan+" Bahuballi= "+bahuballi);
  }
  console.log("------Story End------\n");
}