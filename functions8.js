/*IIFE = Immediately Invoked Function Expressions

Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
*/
console.log('Zadatak 1');

(function replaceFirstAndLast(array) {
	array = [4, 5, 11, 9];
	var first = array[0];
	var last = array[array.length - 1];
		for (i = 0; i < array.length; i++) {
			if (first) {
				array[array.length-1] = first;
			}
			if (last) {
				array[0] = last;
			}
		}	
	return console.log(array);
})();


/*
Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/
console.log('Zadatak 2');

(function calculateSurface(a, b) {
	var result = a * b;
	return console.log(result);
})(4, 5);

/*
Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
 */
console.log('Zadatak 3');

(function replaceLetters(small, caps, string) {
	var counter = 0;
	var newString = "";
	for (i = 0; i < string.length; i++) {
		if (string[i] === small || string[i] === caps) {
			newString += "*";
			counter ++
		}
		else {
			newString += string[i];
		}
	}
	return console.log(newString, counter)
}
)("m", "M", "prograMming");

/*Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/
console.log('Zadatak 4');

(function suggestEmailAddress(name, surname) {
	var domain = "@gmail.com";
	var dot = ".";
	return console.log(name + dot + surname + domain);
}

)("pera", "peric");
/*Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/
console.log('Zadatak 5');

(function decimalToOctal(number) {
	return console.log(parseInt(number, 10));
}
)(034);


/*Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
*/
console.log('Zadatak 6');
(function checkPassword(pass, successCallback, errorCallback) {
	var valid = false;
	if (pass.length >= 6) {
		for (var i = 0; i < pass.length; i++) {
			if (isFinite(parseFloat(pass[i]))) {
				valid = true;
				break;
			}
		}
		
	}
	if(valid) {
		if(typeof successCallback === "function")
			successCallback();
	}
	else {
		if(typeof errorCallback === "function")
			errorCallback();
	}
	return valid;
}
)("JSGuru", function() { 
	console.log("Your password is cool");
}, function() { 
	console.log("Your password is invalid.");
});


/*Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/
console.log('Zadatak 7');

(function filterArray(arr, check) {
	var filteredArray = arr.filter(check);
	
	console.log(filteredArray);
}
)([2, 8, 11, 4, 9, 3], function(currentValue, index, arr) {
	return currentValue % 2 !== 0;
});

