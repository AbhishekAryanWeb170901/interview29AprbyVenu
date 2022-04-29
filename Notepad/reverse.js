// Reverse 108
// Way 1
var num=108;
var output = 0;
var rem;
while(num>0)
{
    rem = num%10;
    output = output*10 + rem;
    num = Math.floor(num/10);
}
console.log(output);


//Way: 2
var reverse=0;
for(var i=108; i>0; i=Math.floor(i/10)){
    reverse=(reverse*10)+i%10; }
    console.log(reverse);



// Way: 3
    var rev=0;
for(var i=123; i>0; i=Math.floor(i/10)){
    rev=(rev*10)+i%10; }
    console.log("Reverse=>",rev);

    var num=123
    var rev=0;
    for(var i=num; i>0; i=Math.floor(i/10)){
        rev=(rev*10)+i%10; }
        console.log(rev);


