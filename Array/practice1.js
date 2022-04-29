//Problem 2 : Given a character in lower case print the upper case character
var char="a";
var lower=['a','b','c','d','e','f','g','h']
var upper=['A','B','C','D','E','F','G','H'];
for(var i=0; i<=lower.length; i++)
  {
    if(char==lower[i])
    {
      console.log(upper[i]);
      break;
    }
  }

  var char="G";
  var lower=['a','b','c','d','e','f','g','h']
  var upper=['A','B','C','D','E','F','G','H'];
  for(var i=0; i<=upper.length; i++)
    {
      if(char==upper[i])
      {
        console.log(lower[i]);
        break;
      }
    }


//Problem 3 : Given an array of numbers find the 
//average of all the even numbers.
var marks=[10,15,20,25,30,50,70];
var sum=0;
var count=0;
for(var i=0; i<=marks.length; i++)
  {
    if(marks[i]%2==0)
    {
    sum=sum+marks[i];
    count++;
    }
  }
console.log(sum/count);



  
  


