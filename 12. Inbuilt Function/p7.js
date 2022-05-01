var arr = [1,2,3];
arr.unshift(4,5,6,7);

console.log(arr);






// Part 1 : Using Bag

var arr = ["M","A","N"];

var bag="";
for(var i=0; i<arr.length; i++)
{
  bag = bag + arr[i];
}

console.log(bag);


// Part 2 : Using Bag

var bag = arr.join();
console.log(bag);
