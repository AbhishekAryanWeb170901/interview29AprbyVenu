//Magical function

function reverseString(string){
    var str = ""
    for(var i=string.length-1;i>=0;i--)
    {
        str = str+ string[i]
    }
            return str
        }

// console.log(reverseString("abcd"))

function checkPalindrom(string, str) {
    if(string == str){
        return true;
    }else{
        return false;
    }
}
var string = "Nrupul"
var str = reverseString("Nrupul")
if(string == str){
    
}
console.log()
