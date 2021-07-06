// 1. Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']

let newArr=[];
arguments.forEach(e =>{
        if(typeof e ==="string"){
            let newElem=e[0].toUpperCase() + e.slice(1,e.length);
            newArr.push(newElem);
        }
        return newArr;
    })

console.log(newArr);

// 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only

const products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }]
 
const productsWithTax = products.map(product => {
 
    const { price: productPrice } = product;
    //const { name: nesto} = product
 
    const newProd = {
        //name: nesto,
        ...product,
        price: Number.parseFloat(productPrice),
        priceWithTax: productPrice * 0.2 + productPrice,
        tax: productPrice * 0.2
    }
 
    return newProd
})
 
console.log(products);
console.log(productsWithTax);

// 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

let increaseEle = (a, x = 1) => {
  let b = a.map((item) => {
    return item + x;
  });

  return b;
};
console.log(increaseEle([4, 6, 11, -9, 2.1], 2));

//4.  Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// 	Input: 120
// 	Output: 24

const tax = 0.2;

let salesTax = (price) => {
  return price * tax;
};
console.log(salesTax(120));

//5.  Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


let allEven = (x) => {
  let evenEle = (ele) => {
    return ele % 2 == 0 && x != 0;
  };

  x = x.filter(evenEle);

  return x;
};
console.log(allEven([6, 11, 9, 0, 3]));

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']


let filterStrings = (arr) => {
  arr = arr.map((item) => {
    return item.toLowerCase();
  });

  let checkStr= (str) => {
    return str.includes("js");
  };

  arr = arr.filter(checkStr);

  return arr;
};
console.log(
    filterStrings(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
);


// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let filterIntegers = (arr) => {
  let checkForIntegers = (n) => {
    return Number.isInteger(n);
  };

  arr = arr.filter(checkForIntegers);

  return arr;
};

console.log(filterIntegers([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7. Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// 	Output: 45, 553


let filterDigits = (...args) => {
  let checkForIntegers = (n) => {
    return Number.isInteger(n);
  };

  let result = args.filter(checkForIntegers);
  result = result.map((item) => {
    return item + "";
  });

  let checkDigits = (x) => {
    return x.includes("5");
  };

  result = result.filter(checkDigits);

  return result;
};
console.log(filterDigits(23, 11.5, 9, "abc", 45, 28, 553));

//8.  Write a function that returns indexes of the elements greater than 10.
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5


let indexOver10 = (arr) => {

  let result = [];

  arr.forEach((ele) => {
    if (ele > 10) {
      result.push(arr.indexOf(ele));
    }
  });

  return result;
};
console.log(indexOver10([1.6, 11.34, 29.23, 7, 3.11, 18]));


// 9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.  

const people = [
    {
        name: "Dijana",
        age: 35
    },
    {
        name: "Jovana",
        age: 25
    },
    {
        name: "Sladjana",
        age: 18
    },
    {
        name: "Ivana",
        age: 27
    },
];


let olderThan25 = (arr) => {
    let over25 = [];
  
    arr.forEach((element) => {
      if (element.age > 25) {
        over25.push(element.name);
      }
    });
  
    return over25;
  };
  
  // check if older than 40

  let olderThan40 = (arr) => {
    let over40 = (x) => {
      return x.age > 40;
    };
  
    return arr.some(over40);
  };
  
  
  console.log(`People who are older than 25: ${olderThan25(people)}`);
  console.log(`Is anyone older than 40? ${olderThan20(people)}`);

//10.  Write a function that checks if the given array is an array of positive integer values.
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no

let isPositive = (arr) => {
  let positiveInt = (n) => {
    return n > 0;
  };

  if (arr.every(positiveInt)) {
    return "All integers are positive";
  } else {
    return "Not all integers are positive";
  }
};

console.log(isPositive([3, 11, 9, 5, 6]));

console.log(isPositive([3, -12, 4, 11]));

//11.  Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output:  48

let productOfElements = (arr) => {
  let product = arr.reduce((ele, value) => {
    return ele * value;
  }, 1);

  return product;
};

console.log(productOfElements([2, 8, 3]));

//12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// 	Output: 8


let maxEle = (arr) => {
  let max = arr[0];

  arr.forEach((ele) => {
    if (ele > max) {
      max = element;
    }
  });

  return max;
};

console.log(maxEle([8, 7, 3, 8, 5.4]));


