//create a function and count even number till 30

function checkEven(num) {

        if(num%2==0){

            return true

        }else{

            return false
        }
    }
var count = 0;
    for(var i=0;i<30;i++){
        var x = checkEven(i)
        if(x == true) {
            count++
        }
    }
    console.log(count)

