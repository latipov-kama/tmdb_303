import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { UpcomingCard } from "./components/UpcomingCard";
import { Genre } from "./components/Genre";

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
		render(genres.data.genres.slice(0,6), genresBox, Genre);
	})
	.catch((error) => console.error(error));
