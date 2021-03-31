/*
1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/
console.log("Zadatak 1");

function insertString(string1,string2, position){
    var string1;
    var string2;
    var result='';
    var position;
    for (i=0; i<string1.length ; i++){
        if(position===i){
            result= result + string2;
        }
        result= result + string1[i];
    } 
    return result;
}
console.log(insertString("My random string", "JS", 2));

/*
2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]

*/
console.log("Zadatak 2");

function joinElements(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var ele = parseFloat(arr[i]);
        if(isFinite(ele)) {
            result += ele;
        }
    }
    return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*
3.Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/
console.log("Zadatak 3");

function filterFalsy (arr) {
    var result = [];
    var k = -1;
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            k++;
            result[k] = arr[i];
        }
    }
    return result;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*
4.Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number

*/
console.log("Zadatak 4");

function reverse(num){
    var num;
    var numbString="";
    numbString+=num;
    var newString='';
    var k=-1;
    for(var i=numbString.length-1; i>=0; i--){
        k++;
        newString+=numbString[i];
    }
    newString=parseInt(newString);
    return newString;
}
console.log(reverse(123456));
/*
5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] 
*/
console.log("Zadatak 5");

function nLastElements(arr, n){
    var arr;
    var n;
    var newArr=[];
    for(i=arr.length-n; i<arr.length; i++){
            newArr [newArr.length]=arr[i];     
    }
    return newArr;
    }
console.log(nLastElements([7,9,0,-2],7));
/*
6.Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]
*/
console.log("Zadatak 6");

function createArray(ele, num) {
    var result = [];
    for (var i = 0; i < num; i++) {
        result[result.length] = ele;
    }
    return result;
}
console.log(createArray("none", 6));

/*
7.Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

*/
console.log("Zadatak 7");

//check if positive, check if equal to the sum of its proper positive divisors, excluding the number itself, and check if the number is half the sum of its positive divisors - including itself

function isPerfect(num) {
    var number = 0;
    for (var i = 1; i < num/2; i++) {
        if (num % i === 0) {
            number += i;
        }
    }
    if (number === num && num !== 0) {
        console.log("The number is a perfect number");
    }
    else {
        console.log("The number is not a perfect number");
    }
}
isPerfect(8);






/*
8.Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

*/
console.log("Zadatak 8");

function findInString(str, word) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        //if current character is space, skip current iteration
        if(str[i] == ' ') {
            continue;
        }
        //we need to make whole word out of characters.
        var whole_word = '';
        //keep adding characters to whole_world until we get to first space character, or until i reaches last index.
        while(i < str.length && str[i] != ' ') {
            whole_word += str[i];
            //whenever we add character to whole_word, we increase i by 1 to move to next character
            i++;
        }
        //at last, compare whole_word with word and increase counter if they're the same
        if (whole_word === word) {
            counter ++;
        }
    }
    return counter;
}
console.log(findInString("The quick fox f fox brown fox", "fox"));
/*
9.Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/
console.log("Zadatak 9");

function hideEmail(email) {
    var result = "";
    var isNamePart = true;
    for (var i = 0; i < email.length; i++) {
        if(isNamePart && email[i] == "@") {
            isNamePart = false;
        }

        result += isNamePart && i > 2 ? "." : email[i];
    }
    return result;
}
console.log(hideEmail("me@bgit.rs"));
/*
10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/
console.log("Zadatak 10");
function findMostFreq(arr) {
    var item = arr[0];
    var most = 1;
    var processed_items = []; //stores unique elements from arr that are already processed
    for(var i = 0; i < arr.length; i++) {

        var isProcessed = false;
        //loop through processed_items to check if we already processed this item.
        for(var z = 0; z < processed_items.length; z++) {
            if(processed_items[z] === arr[i]) {
                console.log('DEBUG: Item "' + arr[i] + '" is found in processed_items, index ' + i);
                //if current item is found in processed_items, set isProcessed to true
                isProcessed = true;
                break;
            }
        }
        if(isProcessed) {
            console.log('DEBUG: Skipped "' + arr[i] + '", index ' + i);
            //skip check for this item, it was already checked before.
            continue;
        }
        
        console.log('DEBUG: Checking "' + arr[i] + '", index ' + i);
        //add this item to processed_items, so we can skip check if it occurs again in the rest of arr
        processed_items[processed_items.length] = arr[i];

        var ocurrences = 0;
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] === arr[i])
            ocurrences++;
        }
        console.log('DEBUG: Item "' + arr[i] + '" has ' + ocurrences + ' ocurrences.');
        if(ocurrences > most) {
            item = arr[i];
            most = ocurrences;
        }
    }
    return item;
}

console.log(findMostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 3, 'a', 2, 4, 9, 3]));