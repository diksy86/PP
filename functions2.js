/*1.Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/
console.log("Zadatak 1");

function isString(myStr) {
    return typeof myStr === "string";
}
console.log(isString(33));

/*2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
console.log("Zadatak 2")

function isBlank(input) {
    return (typeof input === "string" && input === "");

}
console.log(isBlank("My random string"));
console.log(isBlank(""));
console.log(isBlank(12));
console.log(isBlank(false));

    
/*3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"

*/
console.log("Zadatak 3");

function conCat(str, num) {
    var newString = "";
    //making sure we are getting valid number or NaN
    num = parseInt(num);
    //if number is not valid or less than 1, set it to 1, so we at least return the original value
    if (isNaN(num) || num < 1) {
        num = 1;
    }
    for (var i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}
console.log(conCat("Ha"));
console.log(conCat("Ha", 3));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
console.log("Zadatak 4");

function countLetters(str, letter) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (letter === str[i]) {
            result ++;
        }
    }
    return result;
}
console.log(countLetters("My random string", "n"));

/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/
console.log("Zadatak 5");

function firstOccurrence(str, letter) {
    for (var i = 0; i < str.length; i++) {
        if (letter === str[i]) {
            return i;
        }
    }
    return -1;
}
console.log(firstOccurrence("Dijana", "n"));

/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
console.log("Zadatak 6");

function lastOccurrence(str, letter) {
    for (var i = str.length - 1; i >= 0; i--) {
        if (letter === str[i]) {
            return i+1;
        }
    }
    return -1;
}
console.log(lastOccurrence("Dijana", "a"));

/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
console.log("Zadatak 7");

function strToArr(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        //result[result.length] = (str[i] === " ") ? null : str[i];
        if (str[i] === " ") {
            result[result.length] = null;
        }
        else {
            result[result.length] = str[i];
        }
    }
    return result;
        
}
console.log(strToArr("My random string"));

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
console.log("Zadatak 8");

function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(isPrime(9));



/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"

*/
console.log("Zadatak 9");

function replaceSpaces(str, sep) {
    var result = "";
    if (typeof sep === "undefined") {
        sep = "-";
    }
    for (var i = 0; i < str.length; i++) {
        result += (str[i] === " ") ? sep : str[i];
    }
    return result;
}
console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));
console.log(replaceSpaces("My random string"));

//10. Write a function to get the first n characters and add “...” at the end of newly created string.
console.log("Zadatak 10");

function shortenString(str, num) {
    if (str.length <= num) {
        return str;
    }
    var result = "";
    for (i = 0; i < num; i++) {
        result += str[i];
    }
    result += "...";
    return result;
}
console.log(shortenString("Dijana", 20));


/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
console.log("Zadatak 11");

function filterArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var ele = parseFloat(arr[i]);
        if(isFinite(ele)) {
            result[result.length] = ele;
        }
    }
    return result;
}
console.log(filterArray(["1", "21", undefined, "42", "1e+3", Infinity]));

/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/
console.log("Zadatak 12");

function calculateRetirement(age, gender) {
    var required = (gender == 'male') ? 65 : 60;
    if(age >= required) {
        return 'Enjoy your retirement!';
    }
    return 'Years left until retirement: ' + (required - age);
}
console.log(calculateRetirement(62, 'female'));

/*
13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/
console.log("Zadatak 13");

function numberToHuman(num) {
    if(num >= 11 && num <= 20) {
        num += 'th';
    }
    else if (num % 10 === 1) {
        num += 'st';
    }
    else if (num % 10 === 2) {
        num += 'nd';
    }
    else if (num % 10 === 3) {
        num += 'rd';
    }
    else {
        num += 'th';
    }
    return num;
}

for(var i = 0; i <= 40; i++)
    console.log(numberToHuman(i));