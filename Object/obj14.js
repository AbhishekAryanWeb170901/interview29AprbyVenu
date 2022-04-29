
var data2 = {
    name : "Kaleen Bhaiyya",
    age : 45,
    gender : "male",
    address : {
                  state : "Uttarakhand",
                  city :  "Dehradun",
                  pincode : 546765
              }
};


// console.log(data2.name);
// console.log(data2.age);
// console.log(data2.gender);
// console.log(data2.address);

console.log(data2.address.state);
console.log(data2.address.city);


console.log(data2["address"]["state"]);
console.log(data2["address"]["city"]);

console.log(data2);