'use strict';

( function() {
    console.log("Hi");

    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expDate = new Date(expDate);

        this.getInfo = function() {
            var productCode = this.name[0] + this.name[name.length -1] + id;
            productCode = productCode.toUppercase();
            return "/t" + this.name + " -> " + productCode + " " + " " + this.price
        }
    }

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (!product && (!product instanceof Product) || Date.now() > product.expDate.getTime()) {
                throw new Error("No product or past expiration date.");
            } else {
                return this.listOfProducts.push(product);
            }
    }

    this.calcAverageProductPrice = function() {
        var totalPrice = 0;
        this.listOfProducts.forEach(function(product) {
            totalPrice += product.price;
        });
        return totalPrice / this.listOfProducts.length;
    }

    this.getMostExpensive = function() {
        var max = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                var product = this.listOfProducts[i];
                if (max < product.price) {
                    max = product.price;
                }
            }
            return product.getInfo();
    }

    this.calculateTotalPrice = function() {
        var totalPrice = 0;
        this.listOfProducts.forEach(function (product) {
            totalPrice += product.price;
        })
        return totalPrice;
        }
    }

    function PaymentCard(balance, validUntilDate) {
        this.balance = parseFloat(balance.toFixed(2));
        this.validUntilDate = new Date(validUntilDate);

        this.isActive = function() {
            return Date.now() < this.validUntilDate.getTime();
        }
    }

    function checkoutAndBuy(bag, card) {
        var missingFunds = 0;
        if (card.isActive() === false) {
            console.log("Your card has expired");
        }
        else if (missingFunds = bag.calculateTotalPrice() - card.balance) { 
            console.log("Your purchase was not successuful, you are missing " + missingFunds + " RSD.")
            
        } 
        else {
           console.log("Your purchase was successful!");
           
        }
        return card.balance;

    }

    var bread = new Product ("bread", 50, "30/05/2021");
    var coffee = new Product ("coffee", 150, "24/08/2022");
    var milk = new Product ("milk", 50, "24/05/2021");
    var apple = new Product ("apple", 80, "23/06/2021");

    var myBag = new ShoppingBag();
    var myCard = new PaymentCard(200, "23/12/2020");

    myBag.addProduct(bread);
    myBag.addProduct(coffee);
    myBag.addProduct(milk);
    myBag.addProduct(apple);

    checkoutAndBuy(myBag, myCard);







})();