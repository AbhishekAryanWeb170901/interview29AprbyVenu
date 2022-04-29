//Problem 1 : Given an array print the position 
//(starting with 1) and the element
 //in a single line.

 var name=["Ram","Shyam","Sita","Gita","Ramprasad"]
var  age=[20,21,22,25,26,]
for(var i=0;i<name.length;i++)
{
    console.log(i+1,name[i],age[i]);
}

//Given a character in lower case print 
//the upper case character

var print="d"
var lower=["a","b","c","d","e","f"]
var upper=["A","B","C","D","E","F"]
for(var i=0;i<lower.length;i++)
{
    if(print==lower[i])
    {
        console.log(upper[i]);
    }
}

// print average of an array 

var score=[120,198,154,120,122,138]
var sum=0;
var count=0

for(var i=0;i<score.length;i++)
{
    sum+=score[i];
    {
    count++;
}}
var avg=sum/count;
console.log(avg);
