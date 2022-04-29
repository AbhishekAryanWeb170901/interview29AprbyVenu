
var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

var diary = {};

for(var i=0; i<arr.length; i++)
{
  var person = arr[i];
  diary[person] = "present";
}

// console.log(diary);

for(var key in diary)
{
  console.log(key);
}

console.log(Object.keys(diary));









