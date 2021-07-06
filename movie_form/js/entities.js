function Festival() {
    this.listOfPrograms = [];
    this.listOfMovies = [];
}
Festival.prototype.addProgram = function(program) {
    if (!program || !(program instanceof Program)) {
        console.log("Invalid input");
        return false;
    }
    return this.listOfPrograms.push(program) - 1;
}
Festival.prototype.addMovie = function(movie) {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input");
        return false;
    }
    return this.listOfMovies.push(movie) - 1;
}
function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
}
Movie.prototype.getGenreData = function() {
    var first = this.genre[0].toUpperCase();
    var last = this.genre[this.genre.length-1].toUpperCase();
    return "" + first + last;
}
Movie.prototype.getData = function() {
    return this.title + ", " + this.length + "min, " + this.getGenreData();
}
function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}
Program.prototype.getData = function() {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + "." + month + "." + year;

    if(this.listOfMovies.length < 1) {
        return date + ", To be announced";
    }

    var movies_str = this.listOfMovies.length > 1 ? "movies" : "movie";

    return date + ", " + this.listOfMovies.length + " " + movies_str + ", " + this.lengthOfAllMovies() + "min";
}
Program.prototype.lengthOfAllMovies = function() {
    var total = 0;
    this.listOfMovies.forEach(function(item) {
        total += item.length;
        
    })
    return total;
}
Program.prototype.addMovie = function(movie) {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input");
        return false;
    }
    return this.listOfMovies.push(movie) - 1;
}