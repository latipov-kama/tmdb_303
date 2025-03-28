import { Chart } from "Chart.js/auto";
import { ActorCard } from "../../components/cardActor";
import { render } from "../../libs/utils";
import { api } from "/src/services/api.js";
import { CadrImg } from "../../components/CardImg";
import { similarFilm } from "../../components/similar";

const id = localStorage.getItem("movieId");
const filmClik = api.get(`movie/${id}`);
const staff = api.get(`movie/${id}/credits`);
const cadr = api.get(`movie/${id}/images`, { params: { language: null } });
const similar = api.get(`movie/${id}/similar`);

let actors = document.querySelector(".actors");
let similarContainer = document.querySelector(".similar-films");

Promise.all([filmClik, staff, cadr, similar])
  .then(([filmClik, staff, cadr, similar]) => {
    click(filmClik.data);
    CadrImg(cadr.data.backdrops.slice(0, 6));
    render(staff.data.cast.slice(0, 10), actors, ActorCard);
    
    similar.data.results.slice(0, 4).forEach(movie => {
      const filmData = { name: movie.title, genre: movie.genres?.[0]?.name || "Жанр не указан", image: movie.poster_path };
      similarContainer.appendChild(similarFilm(filmData));
    });
  })
  .catch((error) => console.error(error));

function click(film) {
  let pathImg = document.querySelector(".path");
  // pathImg.src = `https://image.tmdb.org/t/p/original${film.backdrop_path}`;

  let posterImg = document.querySelector(".poster");
  posterImg.src = `https://image.tmdb.org/t/p/original${film.poster_path}`;

  let current = document.querySelector(".current");
  let currentFilm = document.querySelector(".current-film");
  let nameFilm = document.querySelector(".name-film");
  current.textContent = film.title;
  currentFilm.textContent = film.title;
  nameFilm.textContent = film.title;

  let filmName = document.querySelector(".name");
  filmName.textContent = film.title;

  let originalName = document.querySelector(".original-name");
  originalName.textContent = film.original_title;

  let infoP = document.querySelector(".info");
  infoP.textContent = film.overview;

  let yearP = document.querySelector(".year");
  yearP.textContent = film.release_date;

  let Name_trailer = document.querySelector('#Name')
  Name_trailer.textContent = film.title;

  let cityP = document.querySelector(".city");
  cityP.textContent = film.production_countries[0]?.name || "Неизвестно";

  let taglineP = document.querySelector(".tagline");
  taglineP.textContent = film.tagline;

  let reiting = document.querySelector("#reiting");
  reiting.textContent = film.vote_average.toFixed(1);

  let genresP = document.querySelector(".genres");
  genresP.textContent = film.genres[0]?.name + ", ...";

  let iframe = document.querySelector("iframe");
  api.get(`/movie/${film.id}/videos`).then((res) => {
    let trailer = res.data.results.find((item) => item.type == "Trailer");
    if (trailer) {
      iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
    } else {
      alert("у этого фильма нет трейлера!!");
    }
  });
  
  let ctx = document.querySelector("#myChart");  
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [10, film.vote_average],
          backgroundColor: ["#4BCB36","#00000000"],
          borderWidth: 0,
        },
      ] ,
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: false,
        legend: false
      },
      cutout: '70%'
    }
  });
}
