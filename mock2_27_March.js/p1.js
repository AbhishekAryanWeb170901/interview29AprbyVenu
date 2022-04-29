



//- Given an string , find the new string that
// will be the concatenation of unique character (whose occurrence is 1 ) in the original string.

//- Sample Input
//```jsx
//amsterdam
//```
//- Sample Output
//```jsx
//sterd
//- Explanation
//Since , In amsterdam the occurence of each character are as follows
//a -> 2
//m -> 2
//s -> 1
//t -> 1
//e -> 1
//r -> 1
//d -> 1
//those elements whose occurence is 1 are s,t,e,r,d
//Thus, the output will be **sterd**


var str="amsterdem";
var obj={};
var sum="";
for(var x=0; x<str.length; x++)
  {
    char=str[x]
    if(obj[char]==undefined)
    {
      obj[char]=1
    }
    else
    {
      obj[char]=obj[char]+1;
    }
  }
for(var z in obj)
{
  if(obj[z]==1)
  {
    sum=sum+z
  }
}
console.log(sum);
