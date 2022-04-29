
var data2 = {
    name : "Kaleen Bhaiyya",
    age : 45,
    gender : "male",
    city : "Mirzapur",
    hobbies : ["Making Guns", "travelling"]
};

// Ist Way
var arr = data2["hobbies"];
console.log(arr[0], arr[1]);

// IInd way
console.log(data2["hobbies"][0]);





console.log("\n******Dot Notation*******)")
// IIIrd way : Dot Notation
var arr2 = data2.hobbies
console.log(arr2[0], arr2[1]);


// IVth way : Dot Notation
console.log(data2.hobbies[0]);










// // Bracket Notation
// data2["city"] = "Gaziabad";
// data2["age"] = 50;


// // Dot Notation
// data2.city = "Gaziabad";
// data2.age = 50;

// console.log(data2);