// Total Price

var e_commerce = {

    products : ["earphone", "headphone", "earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function(){
                    var sum=0;
                    for(var i=0; i<this.quantity.length; i++)
                    {
                        sum = sum + (this.quantity[i] * this.price[i]);
                    }
                    console.log("Total Price is",sum);
                 }
  };
  
  e_commerce.total_price();



var grocery = {

            name : ["Rice", "Dal", "Salt"],
            quantity : [2, 3, 1],
            price : [60, 50, 20],

    Total : function(){
                        var sum=0;
                        for(var x=0; x<this.name.length; x++)
                        {
                            sum = sum + (this.quantity[x] * this.price[x]);
                        }
                        console.log("Total =>",sum);

                        }
                };
                grocery.Total();