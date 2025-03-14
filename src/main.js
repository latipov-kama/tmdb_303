import { render } from "./libs/utils";
import { api } from "./services/api";
let films = document.querySelector(".films");
let topFilms = document.querySelector(".top-films");

const getNowPlaying = api.get("movie/now_playing");

const getPopular = api.get("movie/popular");

const getUpcoming = api.get("movie/upcoming");

Promise.all([getNowPlaying, getPopular, getUpcoming])
  .then(([nowPlaying, popular, upcoming]) => {
    render(popular.data.results, topFilms, createPopularFilmsElement);
    render(upcoming.data.results, films, createFilmsElement);
  })
  .catch((error) => {
    console.error(error);
  });

function createFilmsElement(films) {
  console.log(films);

  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = films.poster_path;

  const p = document.createElement("p");
  p.textContent = films.title;

  div.appendChild(img);
  div.appendChild(p);
  return div;
}
function createPopularFilmsElement(topFilms) {
  console.log(topFilms);

  const div = document.createElement("div");

  const gradeDiv = document.createElement("div");
  gradeDiv.classList.add("grade");
  gradeDiv.textContent = topFilms.vote_average;

  const img = document.createElement("img");
  img.src = 'https://image.tmdb.org/t/p' + topFilms.poster_path;
  
  const p = document.createElement("p");
  p.textContent = topFilms.title;

  const span = document.createElement("span");
  span.textContent = null;

  div.appendChild(gradeDiv);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(span);
  return div;
}
