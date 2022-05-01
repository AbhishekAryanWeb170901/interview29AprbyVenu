//check in a loop whether it is even or odd

function evenOrOdd(Number) {
    if(Number%2==0){
        return true
    }else{
        return false
    }
}
for(var i=1;i<=30;i++){
var x = evenOrOdd(i)
if(x == true){
    console.log(i, "It is Even Number")
}else{
    console.log(i,"It is Odd Number")
}}