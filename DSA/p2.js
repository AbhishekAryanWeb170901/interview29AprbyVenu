
var A = [1,2,3,4,5,6,7,8,9];
var N=9;

    var sum=0;
    for(var x = 0; x < N-1; x++)
    {
        for(var y = x + 1; y < N; y++)
        {
            if(prime(y - x))
            {
                sum = sum + (A[x] - A[y]);
            }
        if(sum < 0)
        {
            sum = sum*(-1);
        }
        console.log(sum);
    }
}
    function prime(N)
    {
        if(N <= 1)
        {
            return false;
        }
        for(var x = 2; x < N; x++)
        {
            if(N % x === 0)
            {
                return false;
            }
            return true;
        }