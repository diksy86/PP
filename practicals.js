/*
Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true


Input: “1bser9re”
Output: false
*/
console.log('Zadatak 1');

var result = function checkString(str, num) {
  var output = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == num) {
      output = true;
      break;
    }
  }
  return output;
};
console.log(result('1bser59re' , 5));
/*
Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/
console.log('Zadatak 2');

var result = function replaceLetters(str) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "J" && i < str.length - 1 && str[i+1] === "S") {
      output += "**";
      i++;
    }
    else {
      output += str[i];
    }
  }
  return output;
}
console.log(result('Programming in JS is super interesting!'));
/*
Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
*/
console.log('Zadatak 3');

var result = function insertCharacters(str, pos, char) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (i == pos - 1)
      output += char;

    output += str[i];
    
  }
  
  return output;
}
console.log(result('Goo morning', 4, 'd'));
/*
Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” 
*/
console.log('Zadatak 4');

var result = function deleteCharacter(str, pos) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (i === pos) {
      i++;;
    }
    output += str[i];
  }
  return output;
}
console.log(result('Goodd morning!', 3));
/*
Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/
console.log('Zadatak 5');

var result = function deleteEverySecondElement(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && i !== 0) {
      i++;
    }
    output[output.length] = arr[i];
  }
  return output;
}
console.log(result([3, 5, 1, 8, 90, -4, 23, 1, 67]));
/*
Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/
console.log('Zadatak 6');

var result = function replaceElements(arr, pos1, pos2) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === pos1) {
      output[output.length] = arr[i] * 2;
    }
    if (i === pos2) {
      output[output.length] = arr[i] *2;
    }
    output[output.length] = arr[i];
  }
  return output;
}
console.log(result([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 ));
/*
Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true


Input: {x: 20, y: 30}, “z”, 20 
Output: false 

Input: {x: 20, y: 30}, “x”, 10 
Output: false
*/
console.log('Zadatak 7');

/*
Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
console.log('Zadatak 8');

/*
Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/
console.log('Zadatak 9');

/*
Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. 
*/
console.log('Zadatak 10');

/*
Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. 
*/
console.log('Zadatak 11');


/*
Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 	 111  
    	    4
                      4321
*/
console.log('Zadatak 12');