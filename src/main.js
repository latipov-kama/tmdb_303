import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { UpcomingCard } from "./components/UpcomingCard";
import { Genre } from "./components/Genre";
import { createFilmsElement } from "./components/films";
import { createPopularFilmsElement } from "./components/popularFilms";

const moviesGrind = document.querySelector(".movies-grind");
const upcomingGrind = document.querySelector(".moviesGrid");
const genresBox = document.querySelector(".categories");

// const showMoreBtn = document.querySelector(".view-all");

let visibleCount = 8;
let visibleCountOfUpcoming = 4;

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");
const getUpcoming = api.get("movie/upcoming");
const getGenres = api.get("/genre/movie/list");

let films = document.querySelector(".films");
let topFilms = document.querySelector(".top-films");
Promise.all([getNowPlaying, getPopular, getUpcoming, getGenres])
  .then(([nowPlaying, popular, upcoming, genres]) => {
    render(
      nowPlaying.data.results.slice(0, visibleCount),
      moviesGrind,
      MovieCard
    );
    render(
      upcoming.data.results.slice(0, visibleCountOfUpcoming),
      upcomingGrind,
      UpcomingCard
    );
    render(genres.data.genres.slice(0, 6), genresBox, Genre);
    render(popular.data.results, topFilms, createPopularFilmsElement);
    render(upcoming.data.results, films, createFilmsElement);
  })
  .catch((error) => console.error(error));

Promise.all([getNowPlaying, getPopular, getUpcoming])
  .then(([nowPlaying, popular, upcoming]) => {})
  .catch((error) => {
    console.error(error);
  });



