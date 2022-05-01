
function isPrime(x) {
    if(x< 2) return false;
  
    for (let k = 2; k < x; k++){
      if( x % k == 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(13))