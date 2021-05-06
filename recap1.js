// Example 0 // 20

var result = true;

function subtract(first, second) {
  return first - second;
}

result = subtract(12, -10);

result = subtract(22, 2);

console.log(result);

// Example 1 // MyVar is not defined

("use strict");

myVar = "random";

function addOne(num) {
  return num + 1;
}

var result = addOne(4);

console.log(result);

// Example 2 // 123

var global = 123;

var resetGlobal = function () {
  global = -1;
};

console.log(global);

// Example 3 // 123

var global = 123;

var resetGlobal = function () {
  global = -1;
};

resetGlobal;

console.log(global);

// Example 4 // 10 -1

var global = 123;

var resetGlobal = function () {
  global = arguments[0] || -1;
};

resetGlobal(10);

console.log(global);

resetGlobal(0);

console.log(global);

// Example 5 // undefined

("use strict");

var result = square(10);

console.log(result);

function square(num) {
  num *= num;
}

// Example 6 // 100

("use strict");

var result = square(10);

console.log(result);

function square(num) {
  return (num *= num);
}

// Example 7 // result is not defined

function toString(num) {
  result = num + "";

  return result;
}

console.log(result);

// Example 8 // num is not defined

function toString(num) {
  "use strict";

  result = num + "";

  return result;
}

toString(num);

console.log(result);

// Example 9 // toString is not a function

var output = toString(0.15);

console.log(output);

var toString = function (num) {
  var result = num + "";

  return result;
};

// Example 10 // 0.15

var toString = function (num) {
  var result = num + "";

  return result;
};

var output = toString(0.15);

console.log(output);

// Example 11 [Function: toString] - cela funkcija, ispisana

var toString = function (num) {
  num = num || "";

  var result = num + "";

  return result;
};

var output = toString;

console.log(output);

// Example 12 // 2 number

//'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
  global++;
};

incrementGlobal();

console.log(global);

console.log(typeof global);

// Example 13 // -1

function sum(num1, num2) {
  num1 = num1 || 0;

  num2 = num2 || 0;

  if (!num1 && !num2) {
    return -1;
  }

  return num1 + num2;
}

var sumNumbers = sum;

var result = sumNumbers();

console.log(result);

// Example 14 // undefined

var x = 21;

var girl = function () {
  console.log(x);

  var x = 20;
};

girl();

// Example 15 // undefined 2

function test() {
  console.log(a);

  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }
}

test();
