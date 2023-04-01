"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: _ => {
    do {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } while (isNaN(personalMovieDB.count) || personalMovieDB.count == null || personalMovieDB.count == "");
  },
  rememberMyFilms: _ => {
    let lastFilm, markFilm;
    for (let i = 0; i < 2; i++) {
      do {
        lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      } while (!lastFilm || lastFilm === "" || lastFilm == 0 || lastFilm.length > 50);
    
      do {
        markFilm = +prompt("Во сколько оцениваешь его?", "");
      } while (!markFilm || markFilm === "" || markFilm > 10 || markFilm < 0);
      personalMovieDB.movies[lastFilm] = markFilm;
    };
  },
  detectPersonalLevel: _ => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы - классический зритель!");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      throw Error;
    };
  },
  writeYourGenres: _ =>  {
    for (let i = 1; i <= 3; i++) {
      do {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`, "");
      } while (personalMovieDB.genres[i-1] === "" || personalMovieDB.genres[i-1] == null);
    };
    personalMovieDB.genres.forEach((item, i) => console.log(`Любимый жанр №${i+1} - это ${item}.`))
  },
  toggleVisibleMyDB: _ => personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true,
  showMyDB: _ => personalMovieDB.private == false ? console.log(personalMovieDB) : pass
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();