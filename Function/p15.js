
var input=["MA", "SA", "I", "SCH", "OOL"];
var char="";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var qw=[];
for(var c=0; c<input.length; c++)
{
  var name1 = input[c];
  for(var a=0; a<name1.length; a++)
    {
      for(var b=0; b<lower.length; b++)
        {
          if(lower[b]==name1[a]) {
            char=char+upper[b];
            break;
        }
      }
    }
qw.push(char);
}
console.log(qw);



