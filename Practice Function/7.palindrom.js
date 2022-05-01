//Magical function

function reverseString(string) {
    var str = ""
    for(var i=string.length-1;i>=0;i--){
        str += string[i]
    }
    return str
}
// console.log(reverseString("abab"))
//write palindrom function and check is it palindrom

function checkPalindrom(string1, string2) {
    if(string1 == string2){
        // console.log("Palindrom")
        return "Yes it is palindrom"
    }else{
        // console.log("Not Palindrom")
        return "Not palindrom"
    }
}
var string1 = "amma"
var string2 = reverseString(string1)
// checkPalindrom(string1, string2)
console.log(checkPalindrom(string1, string2))
    
