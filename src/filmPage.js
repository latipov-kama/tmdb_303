import { header } from "./components/header";
import { api } from "./services/api";
import { render } from "./libs/utils";
import { Starring } from "./components/starring";
import { Posters } from "./components/Posters";
import { SimilarMovies } from "./components/SimilarMovies";
import { createTable } from "./components/infoTable";
import { description } from "./components/description";
import { moviesImage } from "./components/description";

header();

const movieId = localStorage.getItem("selectedMovieId");

const actorsGrid = document.querySelector(".actors-grid");
const postersBox = document.querySelector(".poster-grid");
const similarMoviesBox = document.querySelector(".similar-movies-box");
const infoTable = document.querySelector(".info-table");
const mainDescription = document.querySelector(".main-description");
const filmImage = document.querySelector(".film-image");

const getSimilarMovies = api.get(`movie/${movieId}/similar`);
const getPosters = api.get(`movie/${movieId}/images`);
const getStarring = api.get(`movie/${movieId}/credits`);
const getInfoTable = api.get(`movie/${movieId}`);
const getDescription = api.get(`movie/${movieId}`);
const getImage = api.get(`movie/${movieId}/images`);

Promise.all([getSimilarMovies, getPosters, getStarring, getDescription, getImage])
    .then(([similarMovies, poster, starring, movieDescription, img]) => {
        render(similarMovies.data.results.slice(0, 4), similarMoviesBox, SimilarMovies);
        render(starring.data.cast.slice(0, 10), actorsGrid, Starring);
        mainDescription.appendChild(description(movieDescription.data));
        
        if (poster.data.posters.length > 0) {
            render(poster.data.posters.slice(0, 4), postersBox, Posters);
        } else {
            postersBox.innerHTML = "Постеров не найдено";
        };

        if (img.data.posters.length > 0) {
            filmImage.appendChild(moviesImage(img.data));
        } else {
            filmImage.innerHTML = "Изображение не найдено";
        }
    })
    .catch((error) => console.error(error))
