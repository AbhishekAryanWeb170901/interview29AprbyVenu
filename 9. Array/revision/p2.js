// Given a character in lower case print 
//the upper case character
var print="a";
var lower=["a", "b","c","d","e","f'","g"]
var upper=["A", "B", "C", "D","E","F","G"]
for(var i=0;i<lower.length;i++)
{
    if(print==lower[i])
    {
        console.log(upper[i]);
        break;
    }
}



//given a character in upper case ,
//convert it into lower case
var print="D"
var upper=["A","B","C","D","E","F"]
var lower=["a","b","c","d","e","f"]
for(i=0;i<upper.length;i++)
{
    if(print==upper[i])
    {
        console.log(lower[i]);
    }
}



// Given an array of numbers find the average of 
//all the even numbers.

var sum=0;
var count=0;
var marks=[80,90,89,92,94,98,92,91,98]
for(var i=0;i<marks.length;i++)
{
    sum+=marks[i];
    count++;
}
var avg=sum/count;
console.log(avg);