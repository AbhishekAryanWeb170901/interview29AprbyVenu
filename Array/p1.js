

var box = ["haldi", "salt", "masala", "sugar"];
console.log(box);

console.log(box.length);

console.log(box[2]);







// Create an array which contain some sports 
// Print the length of the array 
// using length, you need to print the last sport


var sports = ["cricket","football","kabaddi"];
console.log(sports.length);

var x = sports.length-1;
console.log(sports[x]);



var names = ["rahul", "mohan", "kalidas", "surdas"];

console.log(names);

names.push("haridas");
names.push("harbhajan das");

console.log(names);



var names = ["rahul", "mohan", "kalidas", "surdas"];

names.pop();
console.log(names);



console.log("   ")

var names = ["rahul", "mohan", "kalidas", "surdas"];

for(var i = 0; i<=3; i++)
{
  console.log(names[i]);
}



var names = ["rahul", "mohan", "kalidas", "surdas"];

names.push("ramdas");
console.log(names);

var size = names.length;
for(var i = 0; i<size; i++)
{
  console.log(names[i]);
}







var names = ["rahul","shyam","ram","jaam"];
var marks = [34, 56, 72, 29];

for(var i = 0; i<marks.length; i++)
{
  console.log(names[i],":",marks[i]);
}






var products = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];

// First 3 elements ---> Ist way
// for(var i = 0; i<=2; i++)
// {
//   console.log(products[i]);
// }


for(var i = 0; i<products.length; i++)
{

  if(i==3)
  {
    break;
  }

  console.log(products[i]);
}






var products = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];

for(var i=0; i<3; i++)
{
 console.log(products[i]);
}







var products = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];

products.push("walkman");
products.push("ipod");
console.log(products);

var start = products.length - 3;

for(var i=start; i<products.length; i++)
{
  console.log(products[i]);
}



console.log("😂😂😂😂😂😂😂😂");



var products = ["A","B","C","D",];

var start = 0;

if(products.length>3)
{
  start = products.length - 3;
}

for(var i=start; i<products.length; i++)
{
  console.log(products[i]);
}



console.log("😂😂😂😂😂😂😂😂");



var names = ["A","B","C","D","E","F","G","H","K"];

var start = Math.floor(names.length/2);
console.log(start);

for(var i=start; i<names.length; i++)
{
  console.log(names[i]);
}


console.log("😂😂😂😂😂😂😂😂");

// print second half array
var names = ["A","B","C","D","E","F","G","H","K"];

var start=0;
if(names.length % 2 == 0)
{
  start = names.length/2;
}

else
{
  start = Math.floor(names.length/2);
}

for(var i=start; i<names.length; i++)
{
  console.log(names[i]);
}




console.log("😂😂😂😂😂😂😂😂");

// print First half array

var names = ["A","B","C","D","E","F","G","H","K"];

var start=0;
if(names.length % 2 == 0)
{
  end = names.length/2;
}

else
{
  end = Math.floor(names.length/2);
}

for(var i=0; i<end; i++)
{
  console.log(names[i]);
}



