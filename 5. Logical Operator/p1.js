


// if(8>4)
// {
//     if(5<7)
//     {
//         console.log("Both are Correct");
//     }
// }
// console.log("🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎");



// if(8>4 && 5<7) 
// {
//     console.log("Both are correct");
// }


// console.log("🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎");






// //here if all these 3 will follow then it will print welco... 
// //otherwise try again
// var msat1 = true;
// var msat2 = true;
// var msat3= true;

// // if(msat1)
// // {
// //   if(msat2)
// //   {
// //     if(msat3)
// //     {
// //       console.log("Welcome to Masai unit 1");
// //     }
// //     else {
// //         console.log("Try Again");
// //     }
// //   }
// // }


// if(msat1 && msat2 && msat3)
// {
//   console.log("Welcome to Masai unit 1"); }






//   // Marriage Problem

// // Gender is male and age >= 21  can get marry
// // Gender is female and age >= 18 can get marry
// // otherwise can't get marry

// var gender = "male";
// var age = 14;

// if(gender == "male" && age >= 21)
// {
//   console.log("Male : Can get marry");
// }
// else if(gender == "female" && age >= 18)
// {
//   console.log("Female : Can get marry");
// }
// else
// {
//   console.log(gender,": Can't get marry");
// }









// // Check whether palak paneer is possible or not. if possible then print "today, we have a party" otherwise print "No Party"

// var palak_available = true;
// var paneer_available = true;


// if(paneer_available && palak_available)
// {
//   console.log("Today, Party");
// }
// else
// {
//   console.log("No Party");
// }








// Difference between , and +

// var a = 2;
// var b = 3;
// var c = "hello";

// console.log(a,b,c);
// console.log(a+b+c);//here 2 and 3 will be 5 then c will add


// // Case 2  : Integers

// var m = 2;
// var n = 3;
// console.log(m+n);
// console.log(m,n);


// // Case 3 : Strings

// var x = "hello";
// var y = "world";
// console.log(x+y);
// console.log(x,y);


// // Case 4 : Integer with strings
// var a = 2;
// var b = "hello";

// console.log(a,b);
// console.log(a+b);


// // Case 5 : "\n"

// var a = 2;
// var b = "hello";
// console.log(a,"\n",b);



// var a = true;
// var b = false;

// console.log(a||b);

// a = true;
// b = true;
// console.log(a||b);

// a = false;
// b = true;
// console.log(a||b);

// a = false;
// b = false;
// console.log(a||b);









// var gender = "female";
// var age = 25;

// if(gender == "male" && age >= 21)
// {
//   console.log("Male : Can get marry");
// }
// else if(gender == "female" && age >= 18)
// {
//   console.log("Female : Can get marry");
// }
// else
// {
//   console.log(gender,": Can't get marry");
// }

// var A = (gender == "male" && age >= 21);
// var B = (gender == "female" && age >= 18);

// if( A || B)
// {
//   console.log(gender,": Can get marry");
// }
// else
// {
//   console.log(gender,": Can't get marry");
// }









var expr = ( ((5>3) || (4<2)) && ((2<5) && (4>2)) );


console.log(expr);





// Switch Statement


var choice = 5;


switch(choice)
{
  case 1 : console.log("Code 1");
           break;

  case 2 : console.log("Code 2");
           break;

  case 3 : console.log("Code 3");
           break;

  default : console.log("Wrong Choice");
            break;

} 






var choice1 = "tuesday";


switch(choice1)
{
  case "monday" : console.log("Relat & comp Operator");
                  break;

  case "tuesday" : console.log("Conditional Statement");
                   break;

  case "wednesday" : console.log("Logical Operator");
                     break;

  default : console.log("Wrong Choice");
            break;

}







// IW Assignment

// problem 1 : Given the year of birth, if the age is between 13 and 19 (both included) print "Teenage" and if it is between 20 and 29(both included) then print twenties otherwise print "NA"

// var yob = 1996;
// var age = 2022 - yob;

// console.log(age);

// if((age>=13) && (age<=19))
// {
//   console.log("Teenage");
// }
// else if((age>=20) && (age<=29))
// {
//   console.log("Twenties");
// }
// else
// {
//   console.log("NA")
// }





// Given any character , if it is a vowel then print its a vowel
// aeiou
// method1
var ch = "f";
if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch=="E")
{
  console.log("its a vowel");
}
else
{
  console.log("not vowel");
}

//method2
switch(ch)
{
  case "a" :
  case "e" :
  case "i" :
  case "o" :
  case "u" : console.log("vowel");
             break;
  default : console.log("not vowel");
            break;
}






// Given a character, if it is a consonant print "consonant"

// var ch = "="

// if((ch != "a") && (ch != "e") && (ch!="i") && (ch != "o") && (ch != "u"))
// {
//   console.log("consonant");
// }
// else
// {
//   console.log("Not consonant");
// }


// var ch = "f";

// switch(ch)
// {
//   case "a" : 
//   case "e" :
//   case "i" :
//   case "o" :
//   case "u" : break;
//   default : console.log("consonant");
//             break;
// }




// Given 3 numbers, which is greater

// var a = 13;
// var b = 5;
// var c = 10;


// if((a>b) && (a>c))
// {
//   console.log("a is greater");
// }

// else if((b>a) && (b>c))
// {
//   console.log("b is greater");
// }

// else if((c>a)&&(c>b))
// {
//   console.log("c is greater");
// }

// else{
//   console.log("All are equal");
// }