/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
*/
console.log("Zadatak 1");
for (a = 0; a <= 15; a++) {
    if (a % 2 === 0) {
        console.log(a + " is even");
    } else {
        console.log(a + " is odd");
    }
}
/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/
console.log("Zadatak 2");

var sum = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);
/*
3. Write a program to compute the sum and product of an array of integers.
*/
console.log("Zadatak 3");

var numbers = [3,6,9];
var sum = 0;
var prod = 1;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    prod *= numbers[i];

}
console.log("Sum is " + sum + " Product is " + prod);
/*
4. Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];
*/
console.log("Zadatak 4");

var x = ['1', 'A', 'B', "c" , "r", true, NaN, undefined];

var output = '';

for (var i = 0; i < x.length; i++) {
    output += x[i] + ", ";
}
console.log(output);
//console.log(x.toString());
/*
5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/
console.log("Zadatak 5");

var a = [ 
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27] 
];

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
        console.log( a[i][j] );
    }
}
/*
6. Write a program that outputs the sum of squares of the first 20 numbers.
*/
console.log("Zadatak 6");

var sum = 0;

for (var i = 1; i <= 20; i++) {
    sum += i * i;
}
console.log(sum);
/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :

< 60% F
< 70% D
< 80% C

< 90% B
< 100% A
*/
console.log("Zadatak 7");

var marks = [80,77,88,95,68]
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
}
var avg = sum / marks.length;
var grade = 'A';

if (avg < 60) {
    grade = "F";
} else if (avg < 70) {
    grade = "D";
} else if (avg < 80) {
    grade = "C";
} else if (avg < 90) {
    grade = "B";
}
console.log("Grade is " + grade);
/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.
*/
console.log("Zadatak 8");

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}

