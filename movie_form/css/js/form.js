var festival = new Festival();

var createMovieBtn = document.querySelector("#create-movie");
var createProgramBtn = document.querySelector("#create-program");
var addMovieToProgramBtn = document.querySelector("#add-movie");
var inputTitleEle = document.querySelector("#title");
var inputLengthEle = document.querySelector("#length");
var selectGenreEle = document.querySelector("#genre");
var movieErrorEle = document.querySelector("#movie-error");
var movieSelectEle = document.querySelector("#movie-select");
var ulMovieListEle = document.querySelector("#movie-list");
var inputDateEle = document.querySelector("#date");
var programErrorEle = document.querySelector("#program-error");
var ulProgramListEle = document.querySelector("#program-list");
var programSelectEle = document.querySelector("#program-select");
var selectMovieEle = document.querySelector("#movie-select");
var selectProgramEle = document.querySelector("#program-select");
var ulProgramSetlist = document.querySelector("#program-setlist");
var programSetlistError = document.querySelector("#program-setlist-error");


function addMovie(title, len, genre) {

    var errors = [];
    movieErrorEle.innerHTML = "";

    if (!title) {
        errors.push("Title is required.");
    }
    if (!len) {
        errors.push("Length is required.");
    }
    if (!genre) {
        errors.push("Genre is required.");
    }

    if(errors.length) {
        movieErrorEle.innerHTML = errors.join("<br />");
        return false;
    }

    var movie = new Movie(title, len, genre);
    var index = festival.addMovie(movie);

    var movieDataLi = document.createElement("li");
    movieDataLi.innerHTML = movie.getData();
    ulMovieListEle.appendChild(movieDataLi);

    var movieOption = document.createElement("option");
    movieOption.innerHTML = movie.title;
    movieOption.setAttribute("value", index);
    movieSelectEle.appendChild(movieOption);

    inputTitleEle.value = "";
    inputLengthEle.value = "";
    selectGenreEle.value = "";

    return true;
}


function addProgram(date) {

    var errors = [];
    programErrorEle.innerHTML = "";
    if (!date) {
        errors.push("Date required.");
    }
    var dateObj = new Date(date);

    if (dateObj.getTime() < Date.now) {
        errors.push("Invalid date.");
    }
    hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
        return dateObj.getTime() === program.date.getTime();
      });

    if (hasProgramWithSameDate) {
        errors.push("Program for same date already exists");
    }
    if(errors.length) {
        programErrorEle.innerHTML = errors.join("<br />");
        return false;
    }
    
    var program = new Program(date);
    var index = festival.addProgram(program);    

    var li = document.createElement('li');
    li.innerHTML = program.getData();
    ulProgramListEle.appendChild(li);

    var option = document.createElement('option');
    option.setAttribute('value', index);
    option.innerHTML = program.getData();
    programSelectEle.appendChild(option);

    return true;
}
function addMovieToProgram() {
    var programListElements = document.querySelectorAll("#program-list li");
    var programSelectOptions = document.querySelectorAll("#program-select option");
    
    var movieValue = parseInt(selectMovieEle.value);
    var programValue = parseInt(selectProgramEle.value);

    var movie = festival.listOfMovies[movieValue];
    var program = festival.listOfPrograms[programValue];

    programSetlistError.innerHTML = "";

    var errors = [];
    if(!(movie instanceof Movie))
        errors.push("Please select movie from the list.");
    if(!(program instanceof Program))
        errors.push("Please select program from the list.");

    if(errors.length) {
        programSetlistError.innerHTML = errors.join("<br />");
        return false;
    }
    program.addMovie(movie);

    programListElements[programValue].innerHTML = program.getData();
    programSelectOptions[programValue + 1].innerHTML = program.getData();
    return true;
}

createMovieBtn.addEventListener('click', function(e) {

    var titleValue = inputTitleEle.value;
    var lengthValue = inputLengthEle.value;
    var genreValue = selectGenreEle.value;

    addMovie(titleValue, lengthValue, genreValue);
});

createProgramBtn.addEventListener("click", function(e) {
    addProgram(inputDateEle.value);
});
addMovieToProgramBtn.addEventListener("click", addMovieToProgram);