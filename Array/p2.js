// print First half array

var names = ["A","B","C","D","E","F","G","H","K"];

var start=0;
if(names.length % 2 == 0)
{
  end = names.length/2;
}

else
{
  end = Math.floor(names.length/2);
}

for(var i=0; i<end; i++)
{
  console.log(names[i]);
}








var compartment = [10, 15, 19, 20, 21,45, 31, 18];
var pad = compartment[0];

for(var i = 0; i<compartment.length; i++)
{
  if(pad<compartment[i])
  {
    pad = compartment[i];
  }
}

console.log(pad);










// Given an array print the position (starting with 1) and the element in a single line.


var names = ["A","B","C","D","E","F","G","H","K"];


for(var i = 0; i<names.length; i++)
{
  console.log(i+1," ",names[i]);
}








// Problem 2 : Given a character in lower case print the upper case character

var char = "e";

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


for(var i=0; i<lower.length; i++)
{
  if(char == lower[i])
  {
    console.log(upper[i]);
    break;
  }
}






// Problem 3 : Given an array of numbers find the average of all the even numbers.

var marks = [23, 22, 31, 65, 26, 87, 69];

var sum=0;
var count=0;
for(var i = 0; i<marks.length; i++)
{
  if(marks[i]%2==1)
  {
    sum = sum + marks[i];
    count++;
  }
}


var average = sum/count;
console.log(average);
// Problem 3 : Given an array of numbers find the average of all the even numbers.

var marks = [23, 22, 31, 65, 26, 87, 69];

var sum=0;
var count=0;
for(var i = 0; i<marks.length; i++)
{
  if(marks[i]%2==1)
  {
    sum = sum + marks[i];
    count++;
  }
}


var average = sum/count;
console.log(average);