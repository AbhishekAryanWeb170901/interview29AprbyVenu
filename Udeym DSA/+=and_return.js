//add number from 1 to 20.
let n=20;
let total=0;
for(let x=1;x<=n;x++)
{
    total+=x;
}
console.log(total);



//with function.
function addNumberUpto(n) {
    let total=0;
    for(let x=1; x<=n; x++)
    {
        total += x;
    }
    return total;
}
addNumberUpto(20);
console.log(total);
