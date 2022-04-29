var i = 1;
var sum = 0;
var count = 0;

while(i<=100)
{
  if(i%2 == 0)
  {
    sum = sum + i;
    count=count+1;
  }

  i++;
}

var average = sum/count;
console.log(average);