// masai school ---> masai-school


function modifyString(input)
{
  var bag="";
  for(var i=0; i<input.length; i++)
  {
    if(input[i] == " ")
    {
      bag = bag + "-";
    }
    else
    {
      bag = bag + input[i];
    }
  }

  console.log(bag);
}



modifyString("masai school hello everyone")