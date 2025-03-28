import { Chart } from "chart.js/auto";
import { header } from "../../components/header";
import { api } from "../../services/api";
import { render } from "../../libs/utils";
import { Starring } from "../../components/starring";
import { SimilarMovies } from "../../components/SimilarMovies";
import { createGallery } from "../../components/gallery";

header();

const movieId = localStorage.getItem("selectedMovieId");

const actorsGrid = document.querySelector(".actors-grid");
const similarMoviesBox = document.querySelector(".similar-movies-box");

const getSimilarMovies = api.get(`movie/${movieId}/similar`);
const getStarring = api.get(`movie/${movieId}/credits`);
const getGallery = api.get(`movie/${movieId}/images`, { params: { language: null } });
const getDescription = api.get(`movie/${movieId}`, {
    params: { append_to_response: "videos,credits,images,similar" }
});


Promise.all([getSimilarMovies, getStarring, getGallery, getDescription])
    .then(([similarMovies, starring, gallery, description]) => {
        render(similarMovies.data.results.slice(0, 4), similarMoviesBox, SimilarMovies);
        render(starring.data.cast.slice(0, 10), actorsGrid, Starring);
        createGallery(gallery.data.backdrops.slice(0, 6))
        Description(description.data)
    })
    .catch((error) => console.error(error))


function Description(data) {
    console.log("box_office:", data.revenue);
    console.log("world_premiere:", data.release_date);
    console.log("russia_premiere:", data.release_date);
    console.log("age_rating:", data.adult);
    console.log("runtime:", data.runtime);



    const bg_img = document.querySelector(".main-img img");

    bg_img.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

    const poster = document.querySelector("#poster");
    poster.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

    const title = document.querySelector("#title");
    title.textContent = data.title;

    const filmTitle = document.querySelector("#film-title");
    filmTitle.textContent = data.title;

    const filmTitle2 = document.querySelector(".film-title");
    filmTitle2.textContent = data.title;

    const miniTitle = document.querySelector(".white");
    miniTitle.textContent = data.title;

    const originalTitle = document.querySelector("#originalTitle");
    originalTitle.textContent = data.original_title;

    const overview = document.querySelector("#movieDescription");
    overview.textContent = data.overview;

    const releaseDate = document.querySelector("#release_date");
    releaseDate.textContent = data.release_date;

    const countriesName = document.querySelector("#production_countries_name");
    countriesName.textContent = data.production_countries?.map(c => c.name).join(", ") || "Нет данных";

    const tagline = document.querySelector("#tagline");
    tagline.textContent = data.tagline;


    const crew = data.credits.crew;
    const findCrewMember = (job) => crew.find(member => member.job === job)?.name || "Нет данных";


    const director = document.querySelector("#director");
    director.textContent = findCrewMember("Director");

    const writers = document.querySelector("#writers");
    writers.textContent = crew.filter(m => m.department === "Writing").map(m => m.name).join(", ") || "Нет данных";

    const producers = document.querySelector("#producers");
    producers.textContent = crew.filter(m => m.job === "Producer").map(m => m.name).join(", ") || "Нет данных";

    const cinematographer = document.querySelector("#cinematographer");
    cinematographer.textContent = findCrewMember("Director of Photography");

    const composer = document.querySelector("#composer");
    composer.textContent = findCrewMember("Original Music Composer");

    const artists = document.querySelector("#artists");
    artists.textContent = data.artists ? data.artists.join(", ") : "Нет данных";

    const editor = document.querySelector("#editor");
    editor.textContent = findCrewMember("Editor");

    const genres = document.querySelector("#genres");
    genres.textContent = data.genres ? data.genres.map(genre => genre.name).join(", ") : "Нет данных";


    const boxOffice = document.querySelector("#boxOffice");
    boxOffice.textContent = data.revenue ? `$${data.revenue.toLocaleString()}` : "Нет информации";

    const worldPremiere = document.querySelector("#worldPremiere");
    worldPremiere.textContent = data.release_date || "Нет данных";

    const russiaPremiere = document.querySelector("#russia_premiere");
    russiaPremiere.textContent = data.release_date || "Нет данных";

    const ageRating = document.querySelector("#age_rating");
    ageRating.textContent = data.age_rating || "Нет данных";

    const runtime = document.querySelector("#runtime");
    runtime.textContent = data.runtime ? `${data.runtime} мин.` : "Нет данных";

    const ratingContent = document.querySelector("#ratingContent");
    ratingContent.textContent = data.vote_average.toFixed(1);

    const iframe = document.querySelector("iframe");

    api.get(`/movie/${data.id}/videos`).then((res) => {
        console.log("Видео:", res.data.results);
        let trailer = res.data.results.find((item) => item.type == "Trailer");
        if (trailer) {
            iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
        } else {
            alert("У этого фильма нет трейлера");
        }
    });

    let ctx = document.querySelector("#myChart");

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, data.vote_average],
                backgroundColor: ["#4BCB36", "#00000000"],
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
            },
            cutout: '75%',
        }
    });

};