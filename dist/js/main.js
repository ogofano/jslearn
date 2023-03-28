"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?");
let markFilm = +prompt("Во сколько оцениваешь его?");
personalMovieDB.movies[lastFilm] = markFilm;

console.log(personalMovieDB);