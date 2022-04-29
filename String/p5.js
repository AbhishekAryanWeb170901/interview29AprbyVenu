// Count the names which contain "A" in them

var names = ["AMIT", "NRUPUL", "MANIDEEP", "YOGESH","aman", "VENU"];

var count=0;
for(var i=0; i<names.length; i++)
{
  var x = names[i];

  for(var j=0; j<x.length; j++)
  {
      if(x[j] == "A" || x[j]=="a")
      {
        count++;
        console.log(x);
        break;
      }
  }
  
}

console.log(count);