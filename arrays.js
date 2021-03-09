/*
1. Write an array of months in a year. Using console.log display June, October and January
from the array.
*/

console.log("Zadatak 1");

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[5], months[9], months[0]);

/*
2. Write an arrays of days in a week. Using console.log display Sunday from the array.
*/

console.log("Zadatak 2");

var week=["Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(week[6]);

/*
3. Print all negative elements from the array [2, -4, 5, -2, -11].
 */

console.log("Zadatak 3");
var elements = [2, -4, 5, -2, -11];
//console.log(elements[1], elements[3], elements[4]);
res = '';
for (var i = 0; i < elements.length; i++){
    if (elements[i] < 0) {
        res += elements[i] + ' ';
    }
}
console.log(res);
/*
4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].
*/

console.log("Zadatak 4");
var m = [5, 15, -5, 20, 12, 18, 72, 14, 9];
//console.log(m[1], m[4], m[5], m[6], m[8]);
res = '';
for (var i = 0; i < m.length; i++) {
    if (m[i] % 3 === 0) {
        res += m[i] + ' ';
    }
}
console.log(res);
/*
5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.
*/

console.log("Zadatak 5");
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];

console.log(a[0][3]);
console.log(a[2]);
console.log(a[2][1]);
