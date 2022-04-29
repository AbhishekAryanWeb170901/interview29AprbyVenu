//Object
// Ist way
function myLastIndexOf(animals, search)
{
  var index = -1;

  for(var i = animals.length-1; i>=0; i--)
  {
    if(animals[i] == search)
    {
      index = i;
      break;
    }
  }

  return index;

}


var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(myLastIndexOf(animals, "hajmola"));


var num1 = 12;
var num2 = 13;
console.log(typeof(num1), typeof(num2));


console.log("********************************")

num1 = num1.toString();
num2 = num2.toString();

console.log(num1, num2);
console.log(typeof(num1), typeof(num2));


var x = 123; 
x = x.toString();
console.log(x);  