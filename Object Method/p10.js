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