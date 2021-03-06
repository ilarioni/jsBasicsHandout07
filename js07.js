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

// do/while loop

var text1 = "";
var r = 0;
do {
    text1 += "This is position " + r + "\n";
    r++;
}
while (r < 10);
console.log(text1);

//compare for and while loops
var cars1 = ["fiat", "opel", "lamborgini", "peugeot"];
var answer1 = "";
for (w = 0; w < cars1.length; w++) {
    answer1 += cars1[w] + "\n";
}
console.log(answer1);

var cars2 = ["seat", "lada", "dacia", "ferrari"];
var z = 0;
var answer2 = "";
while (z < cars2.length) {
    answer2 += cars2[z] + "\n";
    z++;
}
console.log(answer2);

// break and continue
// on break statement "jumpes out" of loop and continue statement "jumps over" one iteration in the loop
var text2 = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text2 += "The result is " + i + "\n";
}
console.log(text2);

var text3 = "";
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text3 += "The following result is " + i + "\n";
}
console.log(text3);