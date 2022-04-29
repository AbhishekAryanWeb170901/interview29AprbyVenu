
var name = "KilKish"; // Milpisk
var output = "";


for(var i=0; i<name.length; i++)
{
  
  if(name[i]=="K")
  {
    output = output + "M";
  }
  else
  {
    output = output + name[i];
  }
  
}

console.log(output);





// Count the names, that starts from "A";

var names = ["Amit", "Nrupul", "Manideep", "Yogesh","Aman", "Venu"];

// console.log(names);
// console.log(names[0]);


var count = 0;
for(var i=0; i<names.length; i++)
{
  var x = names[i];

  if(x[0] == "A")
  {
    count++;
  }
}

console.log(count);



// Problem 1 : Given a string count the number of words in that string

var tagline = "Hi Masai";

if(tagline.length > 0)
{
    var spaces = 0;
    for(var i=0; i<tagline.length; i++)
    {
      if(tagline[i] == " ")
      {
        spaces++;
      }
    }

  console.log(spaces+1,"words");
}

else
{
  console.log(0,"words");
}
