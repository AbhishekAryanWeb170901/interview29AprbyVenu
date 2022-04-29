//You are given a strings, you have to find 
//the count of all such substrings which start and 
//ends with the same character.


var s = "abcab";
var count=0;
for(var x=0; x<s.length; x++){
var str="";{
for(var y=x; y<s.length; y++){
str=str+s[y];
if(str[0]==str[str.length-1]){
count++;
}}}}
console.log(count);
