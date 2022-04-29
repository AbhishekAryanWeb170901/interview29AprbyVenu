// Problem 3 : Given an array of numbers find the average of all the even numbers.

function average(numbers)
{
var marks = [numbers];

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
console.log(average)
}
average(10,30,50);