// Javascript For Loop
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
}
console.log(text);

// different kinds of loops
// 1 for - loops through a block of code a number of times
// 2 for/in - loops through the properties of an object
// 3 for/of - loops through the values of an iterable object
// 4 while - loops through a block of code while a specified condition is true
// 5 do/while - also loops through a block of code while a specified condition is true

var ans = "";
for (i = 0; i < 5; i++) {
    ans += "The number is " + i + "\n";  
}
console.log(ans);

// other form of writing same code as first one

for (i = 0, len = cars.length, res = ""; i < len; i++) {
    res += cars[i] + " is good car " + "\n";
}
console.log(res);
