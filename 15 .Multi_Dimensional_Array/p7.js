
var items = [];


items.push([1,2,3,4]);
items.push([4,5,6,7]);
items.push([7,8,9,5]);


var rows = items.length;
var cols = items[0].length;


for(var father = 0; father<cols; father++)
{
  var output = "";
  for(var son = 0; son<rows; son++)
    {
      output = output + items[son][father]+" ";
    }
  console.log(output);
}