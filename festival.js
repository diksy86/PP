'use strict';
( function () {
    console.log("Hi!");

    function Genre(name) {
        if (!name)
            throw new Error("Name is required.");

        if(typeof name !== "string")
            throw new TypeError("Name must be a string.");
        
        this.name = name;

        this.getData = function () {
            if(this.name.length <= 1)
                return this.name.toUpperCase();

            var result = this.name[0] + this.name[name.length-1];
            return result.toUpperCase();
        }
        
    };

    function Movie(title, genre, length) {
        if (!title || !genre || !length)
            throw new Error("Fields title, genre and length are required")
        
        if(typeof title !== "string")
            throw new TypeError("title must be a string.");
        
        if(!(genre instanceof Genre))
            throw new TypeError("genre must be instance of Genre.");

        length = parseFloat(length)
        if(!isFinite(length) || length < 1)
            throw new TypeError("length must be valid number, greater than zero.");
        
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function() {
            return this.title + ", " + this.length + "min, " + this.genre.getData();
        }
    }

    function Program(date) {
        if (!date)
            throw new Error("Date is required")
        
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumOfMovies = 0;

        this.getData = function() {
            var totalLen = 0;
            var movieList = "";
            this.listOfMovies.forEach(function(movie) {
                totalLen += movie.length;
                movieList += "\t\t" + movie.getData() + "\n";
            });
            
            return "\t" + this.date + ", " + totalLen + " minutes\n" + movieList;
        }

        this.addMovie = function(movie) {
            if(!(movie instanceof Movie))
                throw new TypeError('movie must be instance of Movie.');

            this.listOfMovies.push(movie);
            this.totalNumOfMovies++;
        }
    }

    function Festival(name) {
        if(!name)
            throw new Error("Name is required.");

        if (typeof name !== "string")
            throw new TypeError("Name must be a non-empty string.");
        
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesAll = 0;

        this.getData = function() {
            var output = "\t" + this.name + " has " + this.numOfMoviesAll + " movie titles\n\t";
        
            this.listOfPrograms.forEach(function(program) {
                output += program.getData().replaceAll("\n", "\n\t");
            });

            return output;
        }
        this.addProgram = function(program) {
            if(!(program instanceof Program))
                throw new TypeError("program must be instance of Program.");
            
            this.listOfPrograms.push(program);
            this.numOfMoviesAll += program.totalNumOfMovies;
        }
    }
    
    function createMovie(title, genre, length) {
        return new Movie(title, new Genre(genre), length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var fest = new Festival("WeekendFest");

    var programs = ["2021-05-29", "2021-05-30", "2021-06-01"];
    var movies = [
        {
            title: "Spider-Man: Homecoming",
            genre: "Action",
            length: 133
        },{
            title: "War for the Planet of the Apes",
            genre: "Drama",
            length: 140
        },{
            title: "The Dark Tower",
            genre: "Western",
            length: 95
        },{
            title: "Deadpool",
            genre: "Comedy",
            length: 108
        }
    ];


    programs.forEach(function(date) {
        var program = createProgram(date);
        
        movies.forEach(function(m) {
            program.addMovie(createMovie(m.title, m.genre, m.length));
        });

        fest.addProgram(program);
    });

    console.log(fest.getData());

})();


