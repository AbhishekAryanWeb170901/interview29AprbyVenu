
// //function of addition
// function sum(a,b,c,d,e,f,g,h,i,j)
// {
    
//   console.log(a+b+c+d+e+f+g+h+i+j);
// }


// sum(10,5,15,10,11,20,21,32,21,42);
// sum(10,15,20,25,30,45,30,43,63,87)

function runProgram(input) {
  var str = input.split(" ").map(Number)
  singleLine(str)
}

function singleLine(str) {
    var arr=str
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]+1)
    }
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}