console.log("Hello World");

function sayMyName(name) {
    if(name === "") {
        throw new Error ("I don't know your name.");
    }
    else if(typeof name === "number") {
        throw new Error ("Your name is a number? You sure?!");
    }
    else if(name === "Jagodinka") {
        throw new Error ("Your parents hate you. Change that name.");
    }
    else if(name === "Queen") {
        throw new Error ("You rule!");
    }
    else {
        console.log("Your name is " + name);
    };
}
try {
    sayMyName("Jagodinka");
} catch (error) {
    console.log(error);
}
