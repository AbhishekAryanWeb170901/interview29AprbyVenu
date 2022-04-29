var x = "masai";
var n = x.length;

console.log(n);

for(var father=0; father<n; father++)
{
  for(var son=father; son<n; son++)
  {
    var bag = "";
    for(var k=father; k<=son; k++)
    {
      bag = bag + x[k];
    }
    console.log(bag);
  }
}