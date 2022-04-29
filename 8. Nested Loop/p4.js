// IW Assignment

// Problem1 : print the calendar date

// 1-1
// 1-2
// 1-3
// .
// .
// 1-31


// 2-1
// 2-2
// 2-3
// ..
// 2-28


for(var month=1; month<=12; month++)
{
  var days_value=31;

  if(month==2)
  {
    days_value = 28;
  }
  else if(month==4 || month==6|| month==9 || month==11)
  {
    days_value = 30;
  }

  for(var day=1; day<=days_value; day++)
  {
    console.log(day+"-"+month);
  }
}





// IW Assignment

// Problem1 : print the calendar date

// 1-1
// 1-2
// 1-3
// .
// .
// 1-31


// 2-1
// 2-2
// 2-3
// ..
// 2-28


for(var month=1; month<=12; month++)
{
  var days_value;

  if(month==2)
  {
    days_value = 28;
  }
  else if(month==4 || month==6|| month==9 || month==11)
  {
    days_value = 30;
  }
  else{
    days_value=31;
  }

  switch(month)
  {
    case 1 : console.log("january");
             break;
    
    case 2 : console.log("February");
              break;
    
    case 3 : console.log("March");
              break;
  }

  for(var day=1; day<=days_value; day++)
  {
    console.log(day+"-"+month);
  }
}






// Prime Numbers from 2 to 100


for(var number = 2;number<=100; number++)
{

      var factors = 0;

      for(var i=1; i<=number; i++)
      {
        if(number % i == 0)
        {
          factors++;
        }
      }

      if(factors==2)
      {
        console.log(number,"It is prime");
      }
      else
      {
        console.log(number,"Not prime");
      }

}





// box pattern

for(var father=1; father<=10; father++)
{
  var bag="";
  for(var son=1; son<=10; son++)
  {
    if(father==1 || father == 10)
    {
      bag = bag + "*";
    }
    else
    {
      if(son==1 || son==10)
      {
        bag = bag + "*";
      }
      else
      {
        bag = bag + " ";
      }
    }
  }
  console.log(bag);
}