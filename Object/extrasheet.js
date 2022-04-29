var dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"]
var category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"]
var price  = [40, 60, 50, 60, 25]
var data = []
for(var x=0; x<dish.length; x++)
  {
    var arr = {};
    arr["dish"] = dish[x];
    arr["category"] = category[x];
    arr["price"] = price[x];
    data.push(arr)
  }
console.log(data);
for(var key in data)
  {
    console.log(data[key]["dish"])
  }
  