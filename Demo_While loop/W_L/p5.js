or (int i = 0; i < number; i++) {
    int num = arr[i];
    boolean isPrime = true;
    for (int j = 2; j <= Math.sqrt(num); j++) {
        if (num % j == 0 && num !=2) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
       System.out.println(num +"Prime");
    } else {
       System.out.println(num + "Not prime");
    } 