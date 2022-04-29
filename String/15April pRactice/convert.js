//convert lower case string 
//into upper case.
var  name="shreerampuram";
var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var drum="";
for(var i=0;i<name.length;i++)
{
    for(var j=0;j<lower.length;j++)
    {
        if(name[i]==lower[j])
            {
                drum=drum+upper[j];
                break;
            }
        }
    }
        console.log(drum);
        