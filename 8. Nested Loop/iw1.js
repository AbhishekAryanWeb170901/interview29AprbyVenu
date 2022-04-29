//print the calamder date.
for(var month=1; month<=12; month++)
{
    var day_print = 31;

if(month == 2)
{
    day_print = 28;
}
else if( month==4 || month==6 || month== 9 || month==11)
{
    day_print == 30;
}
for(var day=1; day<=day_print; day++)
{
    console.log("Date",+""+day+" and "+"Month", month);
}}