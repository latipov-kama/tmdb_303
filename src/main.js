import { Movie, Movies } from "./componets/Movie.js";
import { render } from "./libs/utils.js";
import { api } from "./services/api.js";

const getNowPlaying = api.get("movie/now_playing");
const getPopular = api.get("movie/popular");



document.addEventListener("DOMContentLoaded", () => {
const moviesContainer = document.querySelector('.movies-grind');
const container = document.querySelector(".movies-grid");

    Promise.all([getNowPlaying, getPopular])
    .then(([nowPlaying, popular]) => {
        console.log(nowPlaying);
        render(nowPlaying.data.results, moviesContainer, Movies);
        render(popular.data.results, container, Movies);
    })
    .catch(err => console.error(err));
})