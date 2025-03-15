import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { Genre } from "./components/Genre";
import { createFilmsElement } from "./components/films";

const moviesGrind = document.querySelector(".movies-grind");
const upcomingGrind = document.querySelector(".moviesGrid");
const genresBox = document.querySelector(".categories");

// const showMoreBtn = document.querySelector(".view-all");

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");
const getUpcoming = api.get("movie/upcoming");
const getGenres = api.get("/genre/movie/list");

let films = document.querySelector(".films");
let topFilms = document.querySelector(".top-films");
Promise.all([getNowPlaying, getPopular, getUpcoming, getGenres])
	.then(([nowPlaying, popular, upcoming, genres]) => {
		// movies
		render(nowPlaying.data.results.slice(0, 8), moviesGrind, MovieCard);
		render(upcoming.data.results.slice(0, 4), upcomingGrind, MovieCard);
		render(popular.data.results.slice(0, 4), topFilms, MovieCard);

		render(genres.data.genres.slice(0, 6), genresBox, Genre);

		// fro trailers
		render(upcoming.data.results, films, createFilmsElement);
	})
	.catch((error) => console.error(error));
