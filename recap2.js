// Example 0 // Boo!

typeof console.log;

(function () {

return console.log;

})()('Boo!')

// Example 1 // [Function (anonymous)]

function multiply(a, b) {

    var mResult = a * b;
    
    return function (a, b) {
    
    return mResult + a + b;
    
    }
    
    }
    
    var output = multiply(3, 4);
    
    console.log(output);

   // Example 2 // 22

function multiply(a, b) {

    var mResult = a * b;
    
    return function (a, b) {
    
    return mResult + a + b;
    
    }
    
    }
    
    var output = multiply(3, 4)(5, 5);
    
    console.log(output);

    // Example 3 // TypeError: print is not a function

print("This might work or not?");

var print = (function () {

return console.log;

})();

// Example 4 // This might work or not?

var print = (function () {

    return console.log;
    
    })();
    
    print("This might work or not?");

    // Example 5 // [ '1', 'undefined', '2', 'NaN', '3', '4', '5', 'six' ]

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

var output = transformArray(input, function (param) {

return param + "";

});

console.log(output);

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);

}

return result;
}

// Example 6 // NaN

var PI = 3.1;

function circleSurface(radius) {

var result = radius * radius * PI;

var PI = 3.14159;

return result;

}

var output = circleSurface(5);

console.log(output);

// Example 7 // 43.98226

function circleCalc(radius, calculation) {

    var result = calculation(radius);
    
    return result;
    
    }
    
    var output = circleCalc(7, function (r) {
    
    var PI = 3.14159;
    
    return 2 * r * PI;
    
    });
    
    console.log(output);

    // Example 8 // [ NaN, 1000, 0.01, 32, NaN, 12 ]
//[ NaN, 1, 10, 32, NaN, 12 ]

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);

}

return result;

}

var output = transformArray(input, parseFloat);

console.log(output);

output = transformArray(input, parseInt);

console.log(output);

// Example 10 // TypeError: calc is not a function

var cubeVolume = function (a) {

    return a * a * a;
    
    }
    
    function cubeCalculation(a, calc) {
    
    return calc(a);
    
    }
    
    output = cubeCalculation(10, cubeVolume(6))
    
    console.log(output);

    // Example 11 // undefined - nema return

function cubeCalculation(a, calc) {

    return calc(a);
    
    }
    
    var output = cubeCalculation(10, function (a) {
    
    6 * a * a;
    
    })
    
    console.log(output);

    // Example 12 // 600

function cubeCalculation(a, calc) {

    return calc(a);
    
    }
    
    var output = cubeCalculation(10, function (a) {
    
    return 6 * a * a;
    
    })
    
    console.log(output);

    // Example 13 // empty response - nije pozvana poslednja funkcija

function saySomething(msg1) {

    return function (msg2) {
    
    var output = msg1 + " " + msg2;
    
    return function () {
    
    output += "!"
    
    console.log(output);
    
    }
    
    }
    
    }
    
    saySomething("Hi")("there");

    // Example 13 // Hi there!

function saySomething(msg1) {

    function message(msg2) {
    
    var output = msg1 + " " + msg2;
    
    var result = function () {
    
    output += "!";
    
    console.log(output);
    
    }
    
    return result;
    
    }
    
    return message;
    
    }
    
    saySomething("Hi")("there")();

    // Example 14 // empty response

var myArr = [];

var hi = function () {

return "Hi";

};

myArr[0] = hi;

myArr[0]();

var firstElement = myArr[0];

typeof firstElement;

firstElement();

