// // Problem-4 Grade Student Marks

// Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// Sample Input
// [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]
// Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90



data = [
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
]


function calculate(marks)
{
var sum=0;
for(var i =0 ;i<marks.length; i++)
{
sum = sum + marks[i];
}

return sum;
}


function calculateHighest(info)
{
var grade = info.grade;

var name = null;
var pad_max = -Infinity;

for(var i = 0; i<info.students.length; i++)
{
var x = info.students[i];
var total = calculate(x.marks);

if(pad_max<total)
{
pad_max = total;
name = x.name
}
}

console.log(grade+"-"+name+"-"+pad_max);

}

for(var i=0; i<data.length; i++)
{
calculateHighest(data[i]);
}




