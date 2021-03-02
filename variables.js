/*
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?
*/
a = 3;
b = 2;
c = 31;
var result = a * b -c;
console.log (a * b -c / 7) ;
/*
5. How many grams weight 1.2kg of bananas?
*/
console.log (1.2 * 1000, "g");

console.log (5 * 60, "s");
console.log (30 * 60, "s");
console.log (4 * 1024, "MB", 4 * 1024 * 1024 / 98);
var a = 3;
console.log (a*=5);
var name = "Dijana";
var $age = 30;
var HasCat = false;
console.log (typeof name, typeof $age, typeof HasCat);

var god = 35;
console.log (god < 0, god > 120);

var a = 40;
var safe = a > 60 && a < 120;
if (safe == true) {
    console.log ("Safe");
} else {
    console.log ("Not safe");
}

