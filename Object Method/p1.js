var student = {
    name : "lalu",
    grade : "X",
    section : "A"
  };
  
  console.log(student);




var student = {
    name : "lalu",
    grade : "X",
    section : "A",
    maths : 30,
    science : 40,
    english : 35,
    geography : 50,
    history : 80,
    biology : 20
  }
  
  console.log(student.name);
  console.log(student.grade);
  console.log(student.section);
  
  
  console.log(student.maths);
  console.log(student.science);
  console.log(student.english);


var student = {
    name : "lalu",
    grade : "X",
    section : "A",
    
    subjects : {
      maths : 30,
      science : 40,
      english : 35,
      geography : 50,
      history : 80,
      biology : 20
    },
  
    address : {
      state : "Lanka",
      pincode : "000000",
    }
  }
  
  // console.log(student.name);
  // console.log(student.subjects);
  // console.log(student.address);
  
  console.log(student.subjects.english);
  console.log(student.subjects.history);


  var student = {
    name : "lalu",
    grade : "X",
    section : "A",
    maths : 30,
    science : 40,
    english : 35,
    geography : 50,
    history : 80,
    biology : 20
  }
  
  
  
  
  for(var key in student)
  {
    console.log(key," : ",student[key]);
  }
  
  