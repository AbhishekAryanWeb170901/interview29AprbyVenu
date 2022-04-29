

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