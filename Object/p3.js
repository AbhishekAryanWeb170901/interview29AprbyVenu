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