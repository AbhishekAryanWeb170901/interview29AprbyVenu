var amazon = [
    {name : "Speaker", price : 5400, rating: 4},
    {name : "cooker", price : 1400, rating: 3},
    {name : "playstation", price : 20000, rating: 4},
    {name : "sony", price : 10000, rating: 3},
    {name : "Walkman", price : 10000, rating: 4},
    {name : "sony", price : 20000, rating:4}
  
  ];
  
  
  for(var i=0; i<amazon.length; i++)
  {
    if(amazon[i].name == "sony")
    {
      console.log(amazon[i]);
    }
  }
  
  //You want to spend 10 K exactly
  for(var i=0; i<amazon.length; i++)
  {
    if(amazon[i].price <= 10000)
    {
        console.log(amazon[i]);
    }
  }
  
  
  //Task 1
  
  for(var i=0; i<amazon.length; i++)
  {
    if(amazon[i].rating >= 3)
    {
      console.log(amazon[i]);
    }
  }
  
  
  //Task 2 : price in between 5000 and 15000 (including both)
  
  for(var i=0; i<amazon.length; i++)
  {
    if(amazon[i].price >= 5000 && amazon[i].price <= 15000)
    {
      console.log(amazon[i]);
    }
  }
  
  