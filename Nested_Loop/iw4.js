// Problem 1: Print the Calendar date in the below format


for(var month=1 ; month<=12; month++)
{

  var days_value = 31;

  if(month==2)
  {
    days_value = 28;
  }

  else if(month==4 || month==6|| month==9 || month==11)
  {
    days_value = 30;
  }

  switch(month)
    {
      case 1 : console.log("*****January****");
                break;

      case 2 : console.log("******February*****");
                break;

      case 3 : console.log("March");
                break;

      case 4 : console.log("April");
                break;
    }
  
  for(var day=1; day<=days_value; day++)
    {
      console.log("Month=",month,"Day=",day);
    }
}