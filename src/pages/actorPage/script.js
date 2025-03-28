import { header } from "../../components/header";
import { SimilarMovies } from "../../components/SimilarMovies";
import { createGallery } from "../../components/gallery";
import { render } from "../../libs/utils";
import { api } from "../../services/api";

header();
const urlParams = new URLSearchParams(window.location.search);
const actorId = urlParams.get("id");

const moviesGrid = document.querySelector(".moviesGrid");

const getActorInfo = api.get(`person/${actorId}`);
const getActorMovies = api.get(`person/${actorId}/movie_credits`);
const getGenresList = api.get("genre/movie/list");
const getGallery = api.get(`person/${actorId}/images`);


Promise.all([getActorInfo, getActorMovies, getGenresList, getGallery])
    .then(([actorInfo, actorMovies, genresList, gallery]) => {
        console.log(gallery.data);

        ActorsProfile(actorInfo.data, actorMovies.data, genresList.data)
        render(actorMovies.data.cast.slice(0, 4), moviesGrid, SimilarMovies)
        createGallery(gallery.data.profiles.slice(0, 6))
    })

function ActorsProfile(data, movies, genresData) {

    const actorImage = document.querySelector("#actorImage");
    actorImage.src = `https://image.tmdb.org/t/p/original${data.profile_path}`;
    actorImage.alt = data.name;

    const actorName = document.querySelector(".actorName");
    actorName.textContent = data.name;

    const name = document.querySelector("#actorName");
    name.textContent = data.name;

    const galleryActorName = document.querySelector("#actor-name");
    galleryActorName.textContent = data.name;

    const originalName = document.querySelector("#originalName");
    originalName.textContent = data.name;

    const career = document.querySelector("#career");
    career.textContent = data.known_for_department;

    const height = document.querySelector("#height");
    height.textContent = data.height ? `${data.height} м` : "Нет данных";

    const birthday = document.querySelector("#birthday");
    birthday.textContent = data.birthday;

    const placeOfBirth = document.querySelector("#place_of_birth");
    placeOfBirth.textContent = data.place_of_birth;

    const genres = document.querySelector("#genres");

    const genresMap = {};
    genresData.genres.forEach(genre => {
        genresMap[genre.id] = genre.name;
    });

    const actorGenres = new Set();
    movies.cast.forEach(movie => {
        movie.genre_ids.forEach(id => {
            if (genresMap[id]) {
                actorGenres.add(genresMap[id]);
            }
        });
    });

    genres.textContent = actorGenres.size > 0 ? Array.from(actorGenres).join(", ") : "Нет данных";

    const totalFilms = document.querySelector("#totalFilms");
    totalFilms.textContent = movies.cast?.length ?? "Нет данных";
};