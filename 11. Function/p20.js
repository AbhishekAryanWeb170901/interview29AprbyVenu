function lower_case(char){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i = 0; i<upper.length; i++){
      if(char == upper[i]){
        return lower[i];
      }
    }
    return char;
  }
  
  
  function lower_word(word){
  var x = "";
  for(var j = 0;j<word.length;j++){
    x = x + lower_case(word[j]);
  }
     return x;
  }
  
  
  
  
   var array = ["MA", "SA", "I", "SCH", "OOL"];
   var b = [];
   for(var z = 0;z<array.length;z++){
     var d = array[z];
     var q = "";
     for(var g = 0; g<d.length;g++){
       q = q + lower_case(d[g]);
     }
    b.push(q);
   }
   console.log(b);



   