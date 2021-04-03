/* 
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/
console.log("Zadatak 1");

function convertToNum(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        var ele = parseFloat(input[i]);
        if(isFinite(ele)) {
            output[output.length] = ele;
        }
    }
    return output;
}
console.log(convertToNum(["1", "21", undefined, "42", "1e+3", Infinity]));

/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/
console.log("Zadatak 2");

function skipUndefinedElements(a) {
    var result = "";
    for (var i = 0; i < a.length; i++) {
        var ele = parseFloat(a[i]);
        if (isFinite(ele)) {
            result += ele;
        }
    }
    return result;
}
console.log(skipUndefinedElements([NaN, 0, 15, false, -22, '', undefined, 47, null]))

/*Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
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

/*Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/
console.log("Zadatak 4");

function countIntegers(arr) {
    counter = 0;
    for (i = 0; i < arr.length; i++) {
        var temp = parseInt[arr[i]];
            if (isFinite(temp)) {
                counter ++;
            }
        
    }
    return counter;

}
console.log(countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
/*Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
console.log("Zadatak 5");

function countFloat(arr) {
    counter = 0;
    for (i = 0; i < arr.length; i++) {
        var temp = parseFloat[arr[i]];
            if (isFinite(temp)) {
                counter ++;
            }
        
    }
    return counter;

}
console.log(countFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));