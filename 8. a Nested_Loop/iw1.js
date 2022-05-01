for(var father = 5; father>=1; father--)
{
  var bag = "";
  for(var son=1; son<=father; son++)
    {
      bag = bag + "* ";
    }
  console.log(bag);
}