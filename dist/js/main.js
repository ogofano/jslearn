"use strict";

let numberOfFilms, lastFilm, markFilm;

do {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
} while (numberOfFilms < 0 || !numberOfFilms || numberOfFilms === "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {

  do {
    lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  } while (!lastFilm || lastFilm === "" || lastFilm == 0 || lastFilm.length > 50);

  do {
    markFilm = prompt("Во сколько оцениваешь его?", "");
  } while (!markFilm || markFilm === "" || markFilm > 10 || markFilm < 0);
  
  personalMovieDB.movies[lastFilm] = markFilm;
};

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы - классический зритель!");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  throw Error;
}

console.log(personalMovieDB);