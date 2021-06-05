/*Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/
 var coffee = {
     name : 'Macchiato',
     strength : 'mild',
     flavour : 'Caramel',
     milk : 'yes',
     sugar : 'no'
 };
 console.log(coffee.flavour + ' ' + coffee.name);

/*
Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.
*/ 

var favouriteMovie = {
    title : 'Gone With The Wind',
    actors : {
        femaleStar : {
            name : 'Vivien Leigh',
            role : "Scarlet O'Hara",
        },
        maleStar : {
            name : "Clark Gable",
            role : "Ret Butler",
        },
    },
    director : "Victor Fleming",
    genre : "Epic Historical Romance",
    popularity : "Classic",
};
console.log(favouriteMovie.actors.femaleStar.name);

/*Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
*/
function Project(desc, lang, git, dev) {  
    this.description = desc;
    this.language = lang;
    this.gitURL = git;
    this.development = dev;
    this.printURL = function() {
        console.log(this.gitURL);
    };
    this.isJavaScript = function() {
        return this.language === "JS" ? "JS" : "Not JS";
    };
    this.devStatus = function() {
        return this.development ? "Project is in development" : "Project is not in development";
    };
};
    
    
var timepicker = new Project ("bootstrap-timepicker", "JS", "https://github.com/NikolaDeveloper/bootstrap-timepicker.git", false);

timepicker.printURL();

console.log(timepicker.isJavaScript());
console.log(timepicker.devStatus());




/*Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. 
*/

function Recipe(name, type, complexity, ing, time, instr) {  
    this.name = name;
    this.typeOfCuisine = type;
    this.complexity = complexity;
    this.ingredients = ing;
    this.preparingTime = time;
    this.instructions = instr;
    this.printIngredients = function() {
        return this.ingredients;
    };
    this.checkTime = function() {
        return time <= 15 ? "Longer than 15 mins" : "15 mins or under";
    };
    this.changeCuisine = function() {
        return type = "Serbian";
    };
    this.deleteIngredient = function() {
        delete ing[5];
        return ing;
    };
 
}

var pizza = new Recipe("Pizza Capricciosa", "Italian", 3, ["dough", "mozzarella cheese", "Italian baked ham", "mushroom", "tomato", "artichoke"], 15, "Make dough and then add toppings, bake at max temperature for 5 minutes");

console.log(pizza);
console.log(pizza.printIngredients());
console.log(pizza.checkTime());
console.log(pizza.changeCuisine());
console.log(pizza.deleteIngredient());