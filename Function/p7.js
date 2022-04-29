
function multiply(x, y)
{
  var result = x*y;
  return result;
}

function multiplyBy20(a)
{
  var result = a * 20;
  return result;
}

function subtractBy100(b)
{
  var result = b-100;
  return result;
}



var x1 = multiply(2, 5);

var x2 = multiplyBy20(x1);

var x3 = subtractBy100(x2);

console.log(x3);