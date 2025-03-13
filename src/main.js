import { api } from "./services/api";
import { render } from "./libs/utils";
import { MovieCard } from "./components/MovieCard";
import { UpcomingCard } from "./components/UpcomingCard";

const moviesGrind = document.querySelector(".movies-grind");
const upcomingGrind = document.querySelector(".moviesGrid");

// const showMoreBtn = document.querySelector(".view-all");

let visibleCount = 8;
let visibleCountOfUpcoming = 4;

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");
const getUpcoming = api.get("movie/upcoming");

Promise.all([getNowPlaying, getPopular, getUpcoming])
    .then(([nowPlaying, popular, upcoming]) => {
        render(nowPlaying.data.results.slice(0, visibleCount), moviesGrind, MovieCard)
        render(upcoming.data.results.slice(0, visibleCountOfUpcoming), upcomingGrind, UpcomingCard)
    })
    .catch(error => console.error(error))