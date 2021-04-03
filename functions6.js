/*
1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/
console.log("Zadatak 1");

function countVowels(str) {
    var counter = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' ||str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            counter ++;
        }
    }
    return counter;
}
console.log(countVowels("Dijananana na na"));

/*
2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

*/
console.log("Zadatak 2");

function combineElements(a, b) {
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
combineElements(["a", "b", "c"], [1, 2, 3]);
/*
3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

*/
console.log("Zadatak 3");

function rotateElements(arr, k) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (i > k - 1) {
            output[output.length] = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (i < k) {
            output[output.length] = arr[i];
        }
    }
    return output;
}
console.log(rotateElements([1,2,3,4,5,6], 2));
/*
4. Write a function that takes a number and returns array of its digits.
*/
console.log("Zadatak 4");

function numberToArrayOfDigits(num) {
    var result = [];
    var temp = '';
    num += temp;
    for (var i = 0; i < num.length; i++) {
        result[result.length] = num[i];
    }
    return result;
}
console.log(numberToArrayOfDigits(154));
/*
5. Write a program that prints a multiplication table for numbers up to 12.
*/
console.log("Zadatak 5");

function multiplicationTable(from, to) {
    var table = [];
    for(var i = from; i <= to; i++) {
        for(var j = from; j <= to; j++) {
            if(i !== j) {
                table[table.length] = i + "x" + j + "=" + i * j;
            }
        }
    }
    return table;
}
console.log(multiplicationTable(1, 12));
/*
6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

*/
console.log("Zadatak 6");

function convertCelsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(30));
/*
7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

*/
console.log("Zadatak 7");

function findMaxElement(arr) {
    var result = [];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] > max) {
            max = arr[i];
            result[result.length] = arr[i];
        }
    }
    return "Max element is " + max + " from filtered array " + result;
}
console.log(findMaxElement([3, 5, false, "dijana", 8, 10]));
/*
8. Write a function to find the maximum and minimum elements. Function returns an array.
*/
console.log("Zadatak 8");

function findMaxAndMinElements(arr) {
    var output = [];
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    output[output.length] = min;
    output[output.length] = max;
    return output;

}
console.log(findMaxAndMinElements([1, 4, 6, 24, 45, 577]));
/*
9. Write a function to find the median element of array.
*/
console.log("Zadatak 9");

function findMedianElement(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    var mid = max;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < max && arr[i] >= max / min && arr[i] < mid) {
            mid = arr[i];
        }
    }
    return mid;    
}
console.log(findMedianElement([2, 8, 7, 7, 8, 10]));
/*
10. Write a function to find the element that occurs most frequently.

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
/*
11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

*/
console.log("Zadatak 11");

function returnElements(arr){
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {
            output[output.length] = arr[0];
            output[output.length] = arr[arr.length - 1];
            return output;

        }
        else if (arr.length % 2 !== 0) {
            output[output.length] = arr[0];
            var mid = (arr.length - 1) / 2;
            if (mid <= arr[i]) {
                output[output.length] = arr[mid];
            }
            output[output.length] = arr[arr.length - 1];
            return output;
            
        }
    }
}
console.log(returnElements([1, 3, 5, 7, 8, 9, 10]));
/*
12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

*/
console.log("Zadatak 12");
/*
13. Write a function to find all the numbers greater than the average.

*/
console.log("Zadatak 13");
/*
14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40

*/
console.log("Zadatak 14");
/*
15.Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

*/
console.log("Zadatak 15");