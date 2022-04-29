// Problem 2 : Given a string in lower case convert it 
//to upper case

var name = "surajmukhi";

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


var output = "";
for(var i=0; i<name.length; i++)
{
  // if(name[i]==" ")
  // {
  //   output = output + " ";
  //   continue;
  // }
  // Lower
  for(var j=0; j<lower.length; j++)
    {
      if(name[i] == lower[j])
      {
        output = output + upper[j];
        break;
      }
    }
}
console.log(output);





// Problem 3 : Given an array of string count the 
//overall total number of characters

var name = ["Nrupul", "Aman", "Yogesh", "Venu"];


var sum = 0;
for(var i=0; i<name.length; i++)
{
  var x = name[i];
  sum = sum + x.length;
  // console.log(x, x.length);
}

console.log("Count is",sum);



// Update your string

  var name = "Kilvish"; // Milvish

  var output = "";


  for(var i=0; i<name.length; i++)
  {
    
    if(i==0)
    {
      output = output + "M";
    }
    else
    {
      output = output + name[i];
    }
    
  }

  console.log(output);