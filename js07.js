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

// For/in and For/of
// for/in loops through the properties of an object
var person = {fname:"John", lname:"Doe", age:25};
var out = "";
for (x in person) {
    out += person[x] + " ";
}
console.log(out);

// for/of loops through values of iterable objects : arrays, strings
var auto = ["bmw", "merco", "fiat"];
var result = "";
for (y of auto) {
    result += y + "\n";
}
console.log(result);

var str = "JavaScript";
var stres = "";
for (z of str) {
    stres += z + "\n";
}
console.log(stres);

// while loop
var answ = "";
var k = 0;
while (k < 10) {
    answ += "The number is " + k + "\n";
    k++;
}
console.log(answ);
