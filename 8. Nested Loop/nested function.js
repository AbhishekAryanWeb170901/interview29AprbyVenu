function patternPrinting(N) 
{
       
    for(var x=1; x<=N; x++)
    {
         var bag="";
        for(var y=1; y<=x; y++)
        {
            bag=bag+"*";
        }
        console.log(bag);
    }
}
patternPrinting(20);

