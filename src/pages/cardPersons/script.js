import { api } from "../../services/api";
import { render } from "../../libs/utils";
import { PersonFilm } from "../../components/personFilm";
import { header } from "../../components/header";

header()
let id = localStorage.getItem("actorId");

let person = api.get(`/person/${id}`);
let filmPerson = api.get(`discover/movie?with_people=${id}`)
let personImg = api.get(`person/${id}/images`)

let personFilm = document.querySelector('.person-film')

Promise.all([person, filmPerson, personImg])
  .then(([person, filmPerson, personImg]) => {
    PersonInfo(person.data, filmPerson.data);
    render(filmPerson.data.results.slice(0, 4), personFilm, PersonFilm)
    PersonImg(personImg.data.profiles)    
})
  .catch((error) => console.error(error));

function PersonInfo(actor, film) {
  let poster = document.querySelector(".poster");
  poster.src = `https://image.tmdb.org/t/p/original${actor.profile_path}`;

  let current = document.querySelector(".current");
  current.textContent = actor.name;

  let h1Name = document.querySelector(".name");
  h1Name.textContent = actor.name;

  let originalName = document.querySelector(".original-name");
  originalName.textContent = actor.original_name;

  let career = document.querySelector(".career");
  career.textContent = actor.known_for_department;

  let height = document.querySelector('.height')
  height.textContent = 'нет данных';

  let birthday = document.querySelector('.birthday')
  birthday.textContent = actor.birthday

  let placeBirth =document.querySelector('.place-birth')
  placeBirth.textContent = actor.place_of_birth

  let ganre = document.querySelector('.ganre')
  ganre.textContent = 'not ganre'

  let mainFilm = document.querySelector('.main-film') 
  mainFilm.textContent = film.total_results
}

function PersonImg(images) {
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