import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { Genre } from "./components/Genre";
import { createFilmsElement } from "./components/films";
import { createPersonsList } from "./components/celebrities";

const moviesGrind = document.querySelector(".movies-grind");
const upcomingGrind = document.querySelector(".moviesGrid");
const genresBox = document.querySelector(".categories");
const celebritiesBox = document.querySelector(".persons-wrapper");

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");
const getUpcoming = api.get("movie/upcoming");
const getGenres = api.get("/genre/movie/list");
const getCelebrities = api.get("person/popular");

let films = document.querySelector(".films");
let topFilms = document.querySelector(".top-films");

Promise.all([getNowPlaying, getPopular, getUpcoming, getGenres, getCelebrities])
	.then(([nowPlaying, popular, upcoming, genres, celebrities]) => {
		// movies
		render(nowPlaying.data.results.slice(0, 8), moviesGrind, MovieCard);
		render(upcoming.data.results.slice(0, 4), upcomingGrind, MovieCard);
		render(popular.data.results.slice(0, 4), topFilms, MovieCard);

		render(genres.data.genres.slice(0, 6), genresBox, Genre);

		// fro trailers
		render(upcoming.data.results, films, createFilmsElement);

		// celebrities
		celebritiesBox.appendChild(createPersonsList(celebrities.data.results.slice(0, 6)));
	})
	.catch((error) => console.error(error));

