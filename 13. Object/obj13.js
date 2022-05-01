
var data2 = {
    name : "Kaleen Bhaiyya",
    age : 45,
    gender : "male",
    city : "Mirzapur",
    hobbies : ["Making Guns"]
};


data2["son"] = "Munna Bhaiya";
console.log(data2);

// Bracket Notation
var arr = data2["hobbies"];
arr.push("Jogging");

// data2["hobbies"].push("Jogging");


// Dot Notation
var arr2 = data2.hobbies;
arr2.push("Running");

// data2.hobbies.push("Running");

console.log(data2);