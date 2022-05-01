var str = 'quick brown          fox jumps';

console.log(str.split("r"));



// IW Assignment



function my_split(str, char)
{
  var bag = "";
  var output = [];
  
  for(var i=0; i<str.length; i++)
  {
    if(str[i] != char)
    {
      bag = bag + str[i];
    }
    else
    {
      if(bag != "")
      {
        output.push(bag);
      }
      bag = "";
    }
  }
  
  output.push(bag);
  
  console.log(output);
}


var str = "the quick brown fox jumps";

my_split(str, "r");
