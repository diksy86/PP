/*
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
console.log("Zadatak 1");

var e = 22;
var a = [5, -4.2, 3, 7];
var isFound = false; //we need boolean starting value in case array is empty because the initial check will not be performed

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        isFound = true;
        break;
    }
}
console.log(isFound ? "yes" : "no");

/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
console.log("Zadatak 2");

var a = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i]*2;
    }
}
console.log(a);


/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
console.log("Zadatak 3");

var a = [4, 2, 2, -1, 6];
var min = 0;
var index = -1; //has to be invalid for initial check because if the check never occurs, the opperation has to return a value

for (var i = 0; i < a.length; i++) {
    if (i === 0 || min > a[i]) {
        min = a[i];
        index = i;
    }
}

console.log("Minimum value is " + min + " on index " + index);


/*
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
console.log("Zadatak 4");

var a = [4, 2, 2, -1, 6];
if (a.length < 2) {  //check if we have enough elements for comparison
    consol.log("Error, array has less than 2 elements");
} else {
    var min; //declared for use in loop, no value assigned because it will be assigned in the first iteration
    var min2;

    for (var i = 0; i < a.length; i++) {
        if (i === 0) { //if first iteration set min
            min = a[i];
        } else if ( a[i] <= min ) {  // in case we had three same numbers, we need to have <= in order to set min2
            min2 = min;
            min = a[i];
        }
    }
    console.log(min2);
}

/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
console.log("Zadatak 5");

var a = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i]
    }
}
console.log(sum);
/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
console.log("Zadatak 6");

var a = [3, 4, 5, 4, 3];
var end = a.length - 1; //last index in array a
var isSym = false; //by default, we assume until proven wrong

for (var start = 0; start < a.length; start++) {
    //here we check if we should even continue checking - did we reach the halfway or more in the array
    //which would signify that all the values were same so far
    if (start >=end) { 
        // we looped through half the array or more, there is no need to continue checking
        isSym = true;
        break; // leave the loop
    }
    if (a[start] !== a[end]) { 
        //values do not match, symmetry is not true, no need to continue checking
        //since isSym is false by default, we don't need to set it to false here
        break; // leave the loop
    }
    end--; //we need to decrease end by 1 for the next iteration
} 
console.log(isSym ? "symetrical" : "not symetrical");



/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
console.log("Zadatak 7");

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c.push(a[i], b[i]);
}
console.log(c);

/*
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
console.log("Zadatak 8");

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

for (var i = 0; i < b.length; i++) {
    a.push(b[i]); // adding b[i] at the end of a
}
//same thing can be achieved with concat method like this
// a.concat(b);  which would add elementes of array b at the end of array a

console.log(a);


/*
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]
*/
console.log("Zadatak 9");

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var i = a.length - 1;

// We are starting from the back of the array because deleting elements will change lenghth of the array
//and order of the elements

while (i >= 0) {
    if (a[i] === e) {
        // Using splice, we are deleting current element from array a
        //by providing second argument which tells splice how many items from start index (first argument)
        //to delete
        a.splice(i, 1);
    }
    i--;
}

console.log(a);




/*
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
console.log("Zadatak 10");

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

if (p > a.length) {
    console.log("Error");
} else {
    a.splice(p, 0, e); // *where to start, *how many to delete, *what to insert
}
console.log(a);