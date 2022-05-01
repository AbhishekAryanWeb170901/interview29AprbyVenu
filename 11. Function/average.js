function average(...nums) 
{
    let total = 0;
    for(const num of nums) {
    total += num/nums.length;
    }
    return total;
}
console.log(average(24, 88, 12, 4));





x = []
function average(...x) {
    var sum = 0,
        avg = 0;
    for (var i of x ){
        sum = sum + i;
        avg = sum/x.length;
    }
    
    return avg
}

console.log(average(4, 6 , 8 , 10));







    var data = {
        [
        {
            grade: "V",
            students: [
                {name: "Nrupul", marks: [10, 20, 30]},
                {name: "Prateek", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VI",
            students: [
                {name: "Aman", marks: [10, 20, 30]},
                {name: "Albert", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VII",
            students: [
                {name: "Yogesh", marks: [10, 20, 30]},
                {name: "Sandhya", marks: [20, 30, 40]}
            ]
        }
    }
    