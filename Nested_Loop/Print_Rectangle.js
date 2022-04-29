//print a rectangle
for(father=1; father<=12; father++)
{
    var bag="";
    for(son=1; son<=12; son++)
    {
        if(father==1 || father==12)
        {
        bag=bag+"*";
    }
    else
    {
        if(son==1 || son==12)
        {
        bag=bag+"*";
    }
    else
    {
        bag=bag+" ";
    }}}
    console.log(bag);
}