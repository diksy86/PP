/*
1.Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
console.log("Zadatak 1");

function findElement(a, e) {
    for (var i = 0; i < a.length; i++) {
        return (a[i] === e) ? "yes" : "no"; 
    }
}
console.log(findElement([5, -4.2, 4, 7], 3));


/*
2.Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
console.log("Zadatak 2");

function multiPos(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= num;
        }
    }
    return arr;
}
console.log(multiPos([-3, 11, 5, 3.4, -8], 2));
/*
3.Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

*/
console.log("Zadatak 3");

function findMin(a) {
    var min = a[0];
    var index = -1;
    for (var i = 0; i < a.length; i++) {
        if (i === 0 || a[i] < min) {
            min = a[i];
            index = i;
        }
    }
    return "Minimum number is " + min + " at index " + index;
}
console.log(findMin([4, 2, 2, -1, 6]));
/*
4.Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
console.log("Zadatak 4");

function findSecondMin (a) {
    var min = 0;
    var min2 = 0;
    for (var i = 0; i < a.length; i++) {
        if (i === 0 || min > a[i]) {
            min2 = min;
            min = a[i];
            
        }
    }
    return min2;
}
console.log(findSecondMin([4, 2, 2, -1, 6]));
/*
5.Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
console.log("Zadatak 5");

function calculateSumPos(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(calculateSumPos([3, 11, -5, -3, 2]));
/*
6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/
console.log("Zadatak 6");

function isSym(a) {
    var sym = true;
    for (var start = 0, end = a.length - 1; start < end; start++, end--) {
        if (a[start] !== a[end]) {
            sym = false;
            break;
        }
    }
    console.log(sym ? "Array is symmetric" : "Array is not symmetric");
}
isSym([3, 4, 12, 8]);
/*
7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
console.log("Zadatak 7");

function intertwine(a, b) {
    var c = [];
    for (var i = 0; i < a.length; i++) {   
        if (a[i]) {
		c[c.length] = a[i];
	    }
	    if (b[i]) {
		c[c.length] = b[i];
	    }
    }
    console.log(c);
}
intertwine([4, 5, 6, 2], [3, 8, 11, 9]);
/*
8.Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
console.log("Zadatak 8");

function concatinate(a, b) {
    var c = []
    var y = 0;
    for (var i = 0; i < a.length + b.length; i++) {
        if (i < a.length) {
            c[i] = a[i];
        }
        else {
            c[i] = b[y];
            y++;
        }

    }
    return console.log(c);
}
concatinate([4, 5, 6, 2], [3, 8, 11, 9]);
/*
9.Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]

*/
console.log("Zadatak 9");

function deleteElement(a, e) {
    var r = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== e) {
            r[r.length] = a[i];
    
        }
    }
    console.log(r);
}
deleteElement([4, 6, 2, 8, 2, 2], 2);
/*
10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
console.log("Zadatak 10");

function insertElement(a, p, e) {
    if (p > a.length) {
        console.log("Error");
        return;
    }
    var c = [];
    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            c[p] = e;
        }
        c[c.length] = a[i];
    }
    console.log(c);
}
insertElement([2, -2, 33, 12, 5, 8], 3, 78);