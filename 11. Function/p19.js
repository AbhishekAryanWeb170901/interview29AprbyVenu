var name1=["MA","SA","I","SCH","OOL"];
var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bag="";
for(var i=0; i<name1.length; i++)
{
    for(var j=0; j<upper.length; j++)
    {
     if(name1[i]==upper[j])
     {
         bag=bag+lower[j];
     }   
    }
}
console.log(bag);



// Given a string print, the number of times each character appears

// masai 


var name = "masai";
var details = {};

for(var i = 0; i<name.length; i++)
{
  var char = name[i];

  // Not present
  if(details[char] == undefined)
  {
    details[char] = 1;
  }
  // Present Already
  else{
    details[char] = details[char]+1;
  }

}

console.log(details);