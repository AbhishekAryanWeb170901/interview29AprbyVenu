
// var student1 = {name : "Ramprasad", age : 35};

// var student2 = {name : "Babu Bhaiya", age : 42};

// var student3 = {name : "popatlal", age:38};



var students = [
    {name : "Ramprasad", age : 35},
    {name : "Babu Bhaiya", age : 42},
    {name : "popatlal", age:38}
  ];
  
  console.log(students[0]);
  
  console.log(students[1]);
  
  console.log(students[2]);
  
  console.log(students);


  // 3 friend details

  console.log("🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎");

var friends = [
    {name: "Lakhan Singh"  , age : 30  , city : "Delhi"},
    {name : "Rajma Singh", age : 45, city : "Surat"},
    {name : "Sudhama", age : 50, city : "Mathura"}
  ];
  
  
  
  
  for(var i=0; i<friends.length; i++)
  {
    console.log(friends[i].name, friends[i].age, friends[i].city) ; 
  }



  console.log("🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎");



  


var data = {
    name : "Rajesh",
    grade : "X",
    section : "A",
    marks : [
      {maths:33, science:40, english:55},
      {maths:40, science:60, english:15}
    ],
  
    hobbies : ["coding", "running"]
  };
  
  
  // console.log(data.name);
  // console.log(data.marks);
  
  // Ist semester
  console.log(data.marks[0].maths);
  console.log(data["marks"][0]["maths"]);


  console.log("🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎");


// var details = {
//     name : "Shubham",
//     age : 32,
  
//     print : function(){
//               console.log("Hello Everyone");
//             }
//   };
  
  
//   details.print();
//   // details["print"]();



//   [
//     {
//       grade: "V",
//       students: [
//         {name: "Nrupul", marks: [10, 20, 30]},
//         {name: "Prateek", marks: [20, 30, 40]}
//       ]
//     },
//     {
//       grade: "VI",
//       students: [
//         {name: "Aman", marks: [10, 20, 30]},
//         {name: "Albert", marks: [20, 30, 40]}
//       ]
//     },
//     {
//       grade: "VII",
//       students: [
//         {name: "Yogesh", marks: [10, 20, 30]},
//         {name: "Sandhya", marks: [20, 30, 40]}
//       ]
//     }
//   ]
  