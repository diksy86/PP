/*
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
console.log("Excercise 1");

function switchMinMax(a) {
    var c = [];
    var min = 0;
    var max = 0;
    var pmin = -1;
    var pmax = -1;
    for (i = 0; i < a.length; i++) {
        c[c.length] = a[i];
        if (i === 0) {
            max = a[i]
            min = a[i];
            pmin = i;
            pmax = i;
            
        }
        else {
            if(a[i] > max) {
                max = a[i];
                pmax = i;
            }
            else if(a[i] < min) {
                min = a[i];
                pmin = i;
            }
        }        
    }
    c[pmin] = max;
    c[pmax] = min;
    return c;
}
console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*
Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
console.log("Excercise 2");

function changeArray(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        var value = a[i] / 2 + 5
        if (value === 0) {
            value = 20;
        }
        result[result.length] = value;
    }

    return result;
}
console.log(changeArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]));


/*
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
console.log("Excercise 3");

function schoolReport(names, grades) {
    for (var i = 0; i < names.length; i++) {
        var grade = 0;
        var score = grades[i];
        var student = names[i];
        if(score <= 50) {
            grade = 0;
        }
        else if (score > 50 && score <= 60) {
            grade = 6;
        }
        else if (score <= 70) {
            grade = 7;
        }
        else if (score <= 80) {
            grade = 8;
        }
        else if (score <= 90) {
            grade = 9;
        }
        else if (score <= 100) {
            grade = 10;
        }
        if(grade === 0) {
            console.log(student + " acquired " + score + " points and failed to complete the exam.");
        }
        else {
            console.log(student + " acquired " + score + " points and earned " + grade + ".");
        }
    }
}
schoolReport([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]);


/*
(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
console.log("Excercise 4");


/*
(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/
console.log("Excercise 5");
//bubble sort
function sort_desc(input) {
    for(var i = 0; i < input.length; i++) {
        for(j = i + 1; j < input.length; j++) {
            if(input[i] < input[j]) {
                var temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
}

console.log(sort_desc([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/*
Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/
console.log("Excercise 6");

function addSubstract() {
    var sum = 0;
    var sub = 0;
    for (var i = 0; i <= 1000; i ++) {
        if (i % 2 === 0) {
            sum += i;
        }
        else if(i <= 500) {
            sub += i;
        }
    }
    return (sum - sub) * 12.5;
}
console.log(addSubstract());

/*
Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/
console.log("Excercise 7");

function nameYourString(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (typeof input[i] === "string" && input[i].length >= 2) {
            output += input[i][0] + input[i][1];
        }
    }
    return output;
}
console.log(nameYourString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));


/*
Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/
console.log("Excercise 8");

function reverseString(input) {
    var output = "";
    for (var i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }
    return output;
}
console.log(reverseString("Belgrade Institute of Technology"));
/*
Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/
console.log("Excercise 9");
function combinations(from, to) {
    var numbers = [];
    for(var i = from; i <= to; i++) {
        for(var j = from; j <= to; j++) {
            if(i !== j) {
                numbers[numbers.length] = i + "," + j;
            }
        }
    }
    return numbers;
}
console.log(combinations(1, 7));



/*
Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/
console.log("Excercise 10");

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17));
console.log(isPrime(15));


/*
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/
console.log("Excercise 11");

function isPalindrome(str) {
    //first we get rid of spaces from
    var filtered = "";
    for (var i = 0; i < str.length; i++) {
        if(str[i] !== " ")
            filtered += str[i];
    }
    //then we check if start/end are the same, and move start++, end-- until they intersect
    for(var start = 0, end = filtered.length -1; start < end; start++, end--) {
        if(filtered[start] !== filtered[end])
            return false;
    }
    return true;
}
var testStrings = ['eye', 'Greek', 'a nut for a jar of tuna'];
for(var i = 0; i < testStrings.length; i++) 
    console.log(testStrings[i] + ': ' + isPalindrome(testStrings[i]));
/*
Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/
console.log("Excercise 12");

function getGreatestDivisor(a, b) {
    var smaller = a < b ? a : b;
    var bigger = a > b ? a : b;
    var divisor = 0;
    for(var i = smaller; i > 0; i--) {
        if(smaller % i === 0 && bigger % i === 0) {
            divisor = i;
            break;
        }
    }
    return divisor;
}
console.log(getGreatestDivisor(81, 9));