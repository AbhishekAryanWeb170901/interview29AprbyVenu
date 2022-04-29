//DSA_PSC_substring

var count = 0;
var name = "masai";
var n = name.length;

for(var father = 0; father<n; father++){

  for(var son = father; son<n; son++){
    var substr = "";

    for(var collect = father; collect<=son; collect++){
      substr = substr+name[collect];
    }

    if(substr[0] == substr[substr.length-1]){
      count = count+1;
      console.log(substr);
    }
    
  }
}

console.log(count);
