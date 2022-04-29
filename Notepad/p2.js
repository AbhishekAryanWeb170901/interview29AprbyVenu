var masai = 5;
var a = "masai";
var b = "masai";

console.log(a==b); 
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

console.log(a==masai);




// Function definition
function pattern( wave_height , wave_length)
{
    let i, j, k, e, n, count, x;
    e = 2;
    x = 1;

    // for loop for height
    // of wave
    for (i = 0; i < wave_height; i++)
    {
        for (j = wave_height; j <= wave_height + i; j++)
            document.write(" ");

        // for loop for wave
        // length
        for (count = 1; count <= wave_length; count++)
        {
        
            // checking for intermediate
            // spaces
            for (n = (wave_height + wave_height - 2); n >= x; n--)
                document.write(" ");

            for (k = 1; k <= e; k++)
            {
                if (k == 1)
                    document.write("/");
                else if (k == e)
                    document.write("\\");
                else
                    document.write("  ");
            }
        }

        // incrementing counters
        // value by two
        x = x + 2;
        e = e + 2;

        document.write("<br/>");
    }
}

// Driver code

// change value to decrease or
// increase the height of wave
let wave_height = 4;

// change value to decrease or
// increase the length of wave
let wave_length = 4;

pattern(wave_height, wave_length);

// This code is contributed by todaysgaurav

