
function add(a, b)
{
  var sum = a+b;
  return sum;
}


function square(x)
{
  var sq = x*x;
  return sq;
}

function subtract_two(y)
{
  var k = y - 2;
  return k;
}


var output1 = add(2,3);
var output2 = square(output1);
var output3 = subtract_two(output2);

console.log(output3);