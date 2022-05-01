// function checkPrime(Number) {
//     var count =0;
//     for(var i=0;i<=Number;i++){
//         if(Number%i == 0){
//             count++
//         }
//     }
//         if(count == 2){
//             return true
//         }else{
//             return false
//         }
//     }

// for(var i=2;i<=30;i++){
//     var x = checkPrime(i)
//     if(x == true){
//         console.log(i,"-> Prime")
//     }else{
//         console.log(i,"-> Non Prime")
//     }
// }



//write a function and check prime no.
function checkPrime(Number) {
    var count = 0
    for(var i=1;i<=Number;i++){
        if(Number%i==0){
            count++
        }
    }
    if(count == 2){
     return true
        }else{
            return false
        }
    }
// console.log(checkPrime(11))
for(var i=2;i<=40;i++){
    var x = checkPrime(i)
    if(x == true){
        console.log(i, ": Prime")
    }else{
        console.log(i, ": non Prime")
    }
}