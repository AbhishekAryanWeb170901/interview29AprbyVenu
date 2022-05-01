function checkSmallCase(Char) {
    var smallCase = "abcdefghijklmnopqrstuvwxyz"
    for(var i=0;i<smallCase.length;i++){
        if(smallCase[i] == Char){
            return true
            // remember: use close bracket, not else
        }
    }
            return false
        }
    

    console.log(checkSmallCase('M'))
console.log("  ")


    //check upper case
    function checkLowerCase(key) {
        var lowerCase = "abcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<lowerCase.length;i++){
            if(lowerCase[i] == key){
                return true
            }
        }
        return false
    }
    console.log(checkLowerCase('H'))
