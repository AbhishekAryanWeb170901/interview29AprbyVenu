
var kaleen_bhaiya;
console.log(kaleen_bhaiya);


var x = null ;
console.log(x);









function callBhaiya(position)
{

  if(position<0 || position>3 || position==undefined)
  {
    return null;
  }

  var arr = ["Babuji", "Kaleen Bhaiya", "Munna Bhaiyya", "Bablu Bhaiya"];

  return arr[position];
}



var y = callBhaiya();

if(y==null)
{
  console.log("Invalid Bhaiya ji value");
}
else
{
  console.log(y);
}