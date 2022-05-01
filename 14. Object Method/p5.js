

var details = {

    data : [],
    addStudent : function(nam, mat, sci, eng)
                {
  
                  var obj = {
                    name : nam,
                    maths : mat,
                    science : sci,
                    english : eng
                  };
  
                  this.data.push(obj);
                  
                }
  };
  
  
  
  details.addStudent("Shubham",10,20,30);
  details.addStudent("Rahul",15,25,35);
  details.addStudent("Rohit",20,30,40);
  
  console.log(details.data);