import { api } from "/src/services/api.js";

const id = localStorage.getItem('mavieId')

api
  .get(`movie/${id}`)
  .then((res) => clickFilm(res.data))
  .catch((error) => console.error(error));

function clickFilm(film) {
  console.log(film);
  let pathImg = document.querySelector('.path')
  pathImg.src = `https://image.tmdb.org/t/p/original${film.backdrop_path}`;

  let posterImg = document.querySelector(".poster");
  posterImg.src = `https://image.tmdb.org/t/p/original${film.poster_path}`;

  let current = document.querySelector(".current");
  current.textContent = film.title;

  let filmName = document.querySelector(".name");
  filmName.textContent = film.title;

  let originalName = document.querySelector(".original-name");
  originalName.textContent = film.original_title;

  let infoP = document.querySelector(".info");
  infoP.textContent = film.overview

  let yearP = document.querySelector('.year')
  yearP.textContent = film.release_date

  let cityP = document.querySelector('.city')
  cityP.textContent = film.production_countries[0].name

  let taglineP = document.querySelector('.tagline')
  taglineP.textContent = film.tagline
}
