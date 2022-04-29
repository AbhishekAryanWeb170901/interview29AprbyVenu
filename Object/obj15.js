var arr = ["A", "B", "C"];


for(var i=0; i<arr.length; i++)
{
  console.log(arr[i]);
}






var data2 = {
    name : "Kaleen Bhaiyya",
    age : 45,
    gender : "male",
    city : "Mirzapur",
    hobbies : ["Making Guns"]
};


for(var key in data2)
{
console.log(key," --- ",data2[key]);
}





var user = {
    name : "Kaleen Bhaiyya",
    age : 45,
    gender : "male",
    city : "Mirzapur",
    hobbies : ["Making Guns"]
};



for(var key in user)
{
if(user[key] == 45)
{
  console.log(key, user[key]);
}
}