var rectangle = {
    length : 50,
    breadth : 60,
  
    area : function(){
              var x = this.length * this.breadth;
              return x;
            },
  
    perimeter : function(){
                  var y = 2*(this.length + this.breadth);
                  return y;
                }
  };
  
  console.log("Area is",rectangle.area());
  console.log("Perimeter is",rectangle.perimeter());
  