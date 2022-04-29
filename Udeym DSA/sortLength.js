function compareByLength(str1, str2) {
    return str1.length - str2.length;
}
var x = ["Abhishek", "Aryan", "Nrupul", "Ankush", "YogeshBhatt"]

console.log(x.sort(compareByLength))