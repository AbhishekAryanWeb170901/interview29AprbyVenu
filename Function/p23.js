// Problem-5

// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output
// ["ma", "sa", "i", "sch", "ool"]

 
// Converting char to lower case
function tolower1(char)
{
  var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i<upper.length; i++)
  {
    if(char == upper[i])
    {
      return lower[i];
    }
  }
 return char;

}



// Converting word to lower case 
// for Ex : MASAI -> masai

function wordToLower(word)
{
 var output="";
 for(var i = 0; i<word.length; i++)
 {
   var x = tolower1(word[i]);
   output = output + x;
 }

 return output;
}




function convertArrayToLower(arr)
{
 var arr2 = [];
 for(var i = 0; i<arr.length; i++)
 {
   var word = wordToLower(arr[i]);
   arr2.push(word);
 }
 return arr2;
}

var arr = ["MA", "SA", "I", "SCH", "OOL"];
console.log(convertArrayToLower(arr));