var a = 5;
a = a + 1;
console.log(a);

var b = 5;
b = b - 1;
console.log(b);




var a = 5;
a = a + 1;
console.log(a); 


//Post Increment
var b = 5;
b++;
console.log(b);


// pre increment
var c = 5;
++c;
console.log(c);


var b = 5;
++b;
++b;
++b;
--b;
console.log(b);



var a = 10;
var c = a++;
console.log("Value of a",a);
console.log("Value of c",c);


var a = 10;
var c = ++a;
console.log("Value of a",a);
console.log("Value of c",c);


var a = 10;
var c = a--;
console.log("Value of a",a);
console.log("Value of c",c);

var a = 10;
var c = ++a;
var b = 10;
var d = b++;

console.log(a);
console.log(b);
console.log(c);
console.log(d);




var i = 0;
while(true)
{
  console.log("Hello",i);
  
  i=i+1;
}

//Stop : ctrl C



var position = 0;
while(position <= 100)
{
  console.log("Current Position ",position);
  position = position + 1;
}



var position = 0;
var jhola = "";
while(position<10)
{
  jhola = jhola + position + " ";
  position++;
}
console.log(jhola);




var pos = 100;
while(pos>=0)
{
  console.log("position ",pos);
  pos = pos - 1;
}



var guest = 1;

while(guest <= 10)
{
  
  if(guest == 3)
  {
    break;
  }

  console.log("Guest No ",guest);

  guest++;
}





var guest = 1;

while(guest <= 5)
{
  
  guest++;

   if(guest == 3)
  {
    continue;
  }
 
  console.log("Guest No ",guest);


}




// IW Assignment

// Problem 1 : 

var starting = 5;
var ending = 25;

while(starting<=ending)
{
  console.log(starting);
  starting++;
}







// 3 5 7 9.....


var start = 2;
var end = 50;


while(start <= end)
{
  
  if(start % 2 != 0)
  {
    console.log(start);
  }

  start++;
}








// 1 + 2 + 3 + 4 +...+ 50


var i = 1;
var sum = 0;
while(i<=50)
{
  sum = sum + i;
  i++;
}

console.log(sum);






// 1 + 2 + 3 + 4 + 5 + 6......

// 3 + 6 + 9 + 12 + 15


var i = 1;
var sum = 0;

while(i<=50)
{
  if(i%3 == 0)
  {
    sum = sum + i;
  }

  i++;
}

console.log(sum);





// Average of even numbers 1 to 100

// Average = 2+4+.....100 / 50



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










var start=1;
    var limit=4;
        while(start<limit) {
            console.log("Masai School");
                start++;
        }

