var i=9;
if(i%1==0 && i%i==0 && i%3!=0 && i%4!=0 && i%5!=0 && i%7!=0 && i%9==0){
console.log(i,"=> Yes, Its a Prime Number");}
else{
    console.log(i,"=> Not a Prime Number");
}






var num=(2,3,4,5,6,7,8);
var count=0;
for(a=1; a<=num; a++)
{
    if(num%a==0)
    {
        count++;
    }
}
if(count==2)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
