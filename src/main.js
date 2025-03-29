import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { Genre } from "./components/Genre";
import { createFilmsElement } from "./components/films";
import { header } from "./components/header";
import { createPersonsList } from "./components/celebrities";

header()
const moviesGrind = document.querySelector(".movies-grind");
const upcomingGrind = document.querySelector(".moviesGrid");
const genresBox = document.querySelector(".categories");

// const showMoreBtn = document.querySelector(".view-all");

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");
const getUpcoming = api.get("movie/upcoming");
const getGenres = api.get("/genre/movie/list");
const popularPerson = api.get("person/popular");

let films = document.querySelector(".films");
let topFilms = document.querySelector(".top-films");
let personsWrapper = document.querySelector(".persons-wrapper");
Promise.all([getNowPlaying, getPopular, getUpcoming, getGenres, popularPerson])
	.then(([nowPlaying, popular, upcoming, genres, person]) => {
		// movies
		render(nowPlaying.data.results.slice(0, 8), moviesGrind, MovieCard);
		render(upcoming.data.results.slice(0, 4), upcomingGrind, MovieCard);
		render(popular.data.results.slice(0, 4), topFilms, MovieCard);

		render(genres.data.genres.slice(0, 6), genresBox, Genre);

		// fro trailers
		render(upcoming.data.results, films, createFilmsElement);
		personsWrapper.appendChild(createPersonsList(popular.data.results.slice(0, 6)));
		
	})
	.catch((error) => console.error(error));
