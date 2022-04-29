var str = "masai";


diary = {};

for(var i=0; i<str.length; i++)
{
  var char = str[i]

  if(diary[char] == undefined)
  {
    diary[char] = 1
  }
  else
  {
    diary[char] = diary[char] + 1
  }
  
}

for(var k in diary)
{
  console.log(k," ",diary[k]);
}

var minCharacters = function(a, b) {
  var n1 = a.length;
  var n2 = b.length;
  var res = n1+n2;
  var cnt1 = [...Array(26)].fill(0);
  var cnt2 = [...Array(26)].fill(0);
  // pre-processing the counting in two strings
   for (var aa of [...a]) {
      cnt1[aa.charCodeAt(0) - 'a'.charCodeAt(0)]++;
   }
   for (var bb of [...b]) {
      cnt2[bb.charCodeAt(0) - 'a'.charCodeAt(0)]++;
       cnt2[bb-'a']++;
  }
        
  for (var i=0; i<26; i++) {
      if(i>0) // only starts from 'b', because we cannot decrease 'a'
      {
          // case1: a is strictly less than b
          // a: the letters < "i"
          // b: the letters >= "i"
          var r = 0;
          for(var j = 0; j<i; j++)
          {
              r += cnt1[j];
          }
          for(var j = i; j<26; j++)
          {
              r += cnt2[j];
          }
          res = Math.min(res, r);
          // case2: b is strictly less than a
          // a: the letters >= "i"
          // b: the letters < "i"
          r = 0;
          for(var j = i; j<26; j++)
          {
              r += cnt1[j];
          }
          for(var j = 0; j<i; j++)
          {
              r += cnt2[j];
          }
          res = Math.min(res, r);
      }
      // case 3: all unique letter equal to "i"
      r = 0;
      for(var j = 0; j<26; j++)
      {
         if(j !== i)
         {
             r += cnt1[j];
             r += cnt2[j];
         }
      }
       res = Math.min(res, r);
  }
  return res;
};