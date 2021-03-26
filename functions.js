//1. Write a program that calculates the maximum of two given numbers.
console.log("Zadatak 1");

function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
        } else {
            return "The numbers are equal";
        }
}
    console.log(max(10, 15));



//2. Write a program that checks if a given number is odd.
console.log("Zadatak 2");
 
function odd(a) {
    if (a % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(odd(24));

//3. Write a program that checks if a given number is a three digit long number.
console.log("Zadatak 3");

function digits (a) {
    if (a > 99 && a < 1000) {
        return true;
    } else {
        return false;
    }
}
console.log(digits(1000));
//4. Write a program that calculates an arithmetic mean of four numbers.
console.log("Zadatak 4");

function mean (a, b, c, d) {
    var result = (a + b + c + d) / 4;
    return result;
}

console.log(mean(12,13,14,15));

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****
*/
console.log("Zadatak 5");

function draw_square(size) {
    //looping through each row size times
    for (var row = 1; row <= size; row++) {
        //here we store output that will be printed after we looped through all the cells
        var row_output = "";
        //looping through each cell in current row
        for (var cell = 1; cell <= size; cell++) {
            //if in 1st or last row, cells will always be *
            if (row === 1 || row === size) {
                row_output += "*";
            } 
            //else we need to check if cell is the first or last in the current row
            else {
                //if it is 1st or last, it will be *
                if (cell === 1 || cell === size) {
                    row_output += "*";
                } 
                //otherwise, it will be empty cell (space)
                else {
                    row_output += " ";
                }
            }
        } 
        //print each row in the console
        console.log(row_output);
    } 
}
draw_square(5);

/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
console.log("Zadatak 6");

function draw_chart(size) {
    //here we store final output
    var output = "";
    while ( size > 0) {
        output += "*";
        //decrease the counter
        size--;
    }
    //print final output
    console.log(output);
}
//instead of writing the same code 3 times, here we call function that shares the same code 3 times
function draw_multiple_charts(a, b, c) {
    draw_chart(a);
    draw_chart(b);
    draw_chart(c);
}
draw_multiple_charts(5, 3, 7);




//7. Write a program that calculates a number of digits of a given number.
console.log("Zadatak 7");

function count(x) {
    var num = "" + x;
    return num.length;

}
console.log(count(245));

/*
8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/
console.log("Zadatak 8");


function repeat(array, e) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === e) {
        sum += 1;
        }
    }
    return sum;
}
console.log(repeat([2, 4, 7, 8, 7, 7, 1], 7));



//9. Write a program that calculates the sum of odd elements of a given array.
console.log("Zadatak 9");

function oddSum(a) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            sum += a[i];
        }
    } 
    return sum;
}

console.log(oddSum([2, 4, 7, 8, 7, 7, 1]));


/*
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/
console.log("Zadatak 10");


function appear (string) {
    var sum = 0;
    var b = 'a';
    for (i = 0; i < string.length; i++) {
        if (string[i] === b ) {
            sum +=1
        }
    } 
    return sum;
}
console.log(appear("Appearance"));

/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/
console.log("Zadatak 11");


function concatinate (givenString, num) {
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += givenString;
    } 
    return newString;
}
console.log(concatinate('abc', 4))