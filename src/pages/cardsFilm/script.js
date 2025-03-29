import { Chart } from "Chart.js/auto";
import { ActorCard } from "../../components/cardActor";
import { render } from "../../libs/utils";
import { api } from "/src/services/api.js";
import { header } from "../../components/header";

header();
const id = localStorage.getItem("movieId");
const filmClik = api.get(`movie/${id}`);
const staff = api.get(`movie/${id}/credits`);
const cadr = api.get(`movie/${id}/images`, { params: { language: null } });

let actors = document.querySelector(".actors");

Promise.all([filmClik, staff, cadr])
  .then(([filmClik, staff, cadr]) => {
    clickFilm(filmClik.data);
    CadrImg(cadr.data.backdrops.slice(0, 6));
    render(staff.data.cast.slice(0, 10), actors, ActorCard);
  })
  .catch((error) => console.error(error));

function clickFilm(film) {
  let pathImg = document.querySelector(".path");
  pathImg.src = `https://image.tmdb.org/t/p/original${film.backdrop_path}`;

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

  let cityP = document.querySelector(".city");
  cityP.textContent = film.production_countries[0].name;

  let taglineP = document.querySelector(".tagline");
  taglineP.textContent = film.tagline;

  let genresP = document.querySelector(".genres");
  genresP.textContent = film.genres[0].name + "," + " " + "...";

  let ratingContent = document.querySelector("#ratingContent");
  ratingContent.textContent = film.vote_average.toFixed(1);

  let iframe = document.querySelector("iframe");
  api.get(`/movie/${film.id}/videos`).then((res) => {
    let trailer = res.data.results.find((item) => item.type == "Trailer");
    if (trailer) {
      iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
    } else {
      alert("у этого фильма нет трейлера");
    }
  });
  let ctx = document.querySelector("#myChart");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [10, film.vote_average],
          backgroundColor: ["#4BCB36", "#00000000"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false },
      },
      cutout: "75%",
    },
  });
}

function CadrImg(images) {
  let img1 = document.querySelector("#img1");
  let img2 = document.querySelector("#img2");
  let img3 = document.querySelector("#img3");
  let img4 = document.querySelector("#img4");
  let img5 = document.querySelector("#img5");
  let img6 = document.querySelector("#img6");

  img1.src = `https://image.tmdb.org/t/p/original${images[0].file_path}`;
  img2.src = `https://image.tmdb.org/t/p/original${images[1].file_path}`;
  img3.src = `https://image.tmdb.org/t/p/original${images[2].file_path}`;
  img4.src = `https://image.tmdb.org/t/p/original${images[3].file_path}`;
  img5.src = `https://image.tmdb.org/t/p/original${images[4].file_path}`;
  img6.src = `https://image.tmdb.org/t/p/original${images[5].file_path}`;
}
