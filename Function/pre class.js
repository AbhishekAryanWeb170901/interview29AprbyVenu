var name1="Hello";
console.log(name1);
var a=2;
var b=3;
console.log(a+b);
console.log("🐎🐎🐎🐎🐎🐎🐎");

var name1="Hello";
console.log(name1);
var a=2;
var b=3;
console.log(a+b);
console.log("🐎🐎🐎🐎🐎🐎🐎");
//controlling my code
//syntax
//function  print hello
function print_hello()
{

    var name1="Hello";
    console.log(name1);
}

// //funcion sum
//     function sum_number()
// {    
//     var a=2;
//     var b=3;
//     console.log(a+b);
// }
// print_hello();
// print_hello();
// print_hello();
// print_hello();
// sum_number();
// for(var i=1; i<=4; i++)
// {
//     console.log(i);
// }


//print hello



//sum of two function

//ordering is important
function test(karan,arjun)
{
    console.log(karan,arjun);
}
test("hello","world")




function ammi_jan(x,y)
{
    var sum=x+y;
    console.log("ammi_jan replied",sum);

}
ammi_jan(9,1000);
console.log("🐎🐎🐎🐎🐎🐎🐎");
console.log("🐎🐎🐎🐎🐎🐎🐎");
function sum1(x,y)
    {
        var sum1=x+y;
        console.log("Sum is=>",sum1)


    }


    function sub(x,y)
    {
    sub=x-y;
    console.log("Substraction is=>",sub)


    }



    function div(x,y)
    {
        var div=x/y
        console.log("Division is=>",div)


    }



    function  multiplication(x,y)
    {

        var multiplicatin=x*y;
        console.log("multiplication is=>",multiplication)

    }
sum1(80,5);
sub(50,20);
div(80,20);
multiplication(20,20);
console.log("🐎🐎🐎🐎🐎🐎🐎");


function calculate_sum(a,b)
{
    var sum=a+b;
    return sum;
}

var output = calculate_sum(8,80);
console.log(output);

console.log("🐎🐎🐎🐎🐎🐎🐎");




function addition(a, b)
{
  var sum = a + b;
  return sum;
}


function square(a)
{
  var sq = a*a;
  return sq;
}

function printVariable(n)
{
  console.log(n);
}


var result = addition(20, 30);

var y = square(result);

printVariable(y);
console.log("🐎🐎🐎🐎🐎🐎🐎");
// function multiply()
// {
//     var result=x*y;
//     return result;

// }
// function multiplyby20(a)
// {
//     var result=a*20;
//     return result;
        
//     function substractby100(b)
//     {
//         var result;
//         return result;
//     }
//     var x1
function modify_string(input){
    var output = "";
  
    for(var i = 0; i<input.length; i++){
  
      if(input[i]==" "){
        output = output + "-";
      }
      else{
        output = output + input[i];
      }
  
    }
  
    return output;
  }
  
  console.log(modify_string("A School my"));
  console.log(modify_string("A B C D E F"));
  
  
  
  
  
  var output = [];
  var arr = ["MA", "SA", "I", "SCH", "OOL"]
  for (var i = 0; i < arr.length; i++) {
    var get = convert(arr[i]);
    output.push(get)
  }
  var a = Convert("Hello")
  console.log(a)
  console.log(output)
  