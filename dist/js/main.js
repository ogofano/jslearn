"use strict";

let numberOfFilms, lastFilm, markFilm;

function start() {
  do {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  } while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "");
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {

    do {
      lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    } while (!lastFilm || lastFilm === "" || lastFilm == 0 || lastFilm.length > 50);
  
    do {
      markFilm = prompt("Во сколько оцениваешь его?", "");
    } while (!markFilm || markFilm === "" || markFilm > 10 || markFilm < 0);
    
    personalMovieDB.movies[lastFilm] = markFilm;
  };
};

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы - классический зритель!");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    throw Error;
  };
};

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ""))
  };
};

writeYourGenres();

function showMyDB() {
  personalMovieDB.private == false ? console.log(personalMovieDB) : pass
};

showMyDB();