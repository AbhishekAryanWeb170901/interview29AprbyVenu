
// Given a matrix print it in the form of a snake


var items = [];


items.push([1,2,3]);
items.push([4,5,6]);
items.push([7,8,9]);


var rows = items.length;
var cols = items[0].length;



for(var father=0; father<rows; father++)
{

  var output = [];
  // Even row
  if(father%2==0)
  {
    for(var son=0; son<cols; son++)
      {
        output.push(items[father][son]);
      }
  }

  // Odd row
  else
  {
    for(var son=cols-1; son>=0;son--)
      {
        output.push(items[father][son]);
      }
  }

  console.log(output);
  
}