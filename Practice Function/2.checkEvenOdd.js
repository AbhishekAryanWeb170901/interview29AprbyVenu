//check even or odd function

function checkEven(Number) {

    if(Number%2 == 0){
        return true;

    }else{
        return false;
    }
    
}
// var print = checkEven(11)
// console.log(print)

var x = checkEven(110)
if(x == true){
    console.log("Even Number")
}else {

    console.log("Odd Number")
}