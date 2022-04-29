// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST

    function tolower1(char)
    {
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";

    for(var i = 0; i<upper.length; i++)
    {
        if(char == upper[i])
        {
        return lower[i];
        }
    }
    return char;

    }



    function toUpper1(char)
    {
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";

    for(var i = 0; i<lower.length; i++)
    {
        if(char == lower[i])
        {
        return upper[i];
        }
    }
    return char;

    }



    var str = "Test";

    var bag = "";
    for(var i = 0; i<str.length; i++)
    {
    // Check uppercase
    if(str[i] == toUpper1(str[i]))
    {
        bag = bag + tolower1(str[i]);
    }


    // Check LowerCase
    if(str[i] == tolower1(str[i]))
    {
        bag = bag + toUpper1(str[i])
    }

    }

console.log(bag);