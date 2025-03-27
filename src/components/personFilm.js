export function PersonFilm(film) {
    console.log(film);
    
  const card = document.createElement("div");
  card.classList.add("film-card");

  const imgBox = document.createElement("div");
  imgBox.classList.add("img_box");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w400${film.poster_path}`;
  img.alt = film.title;
  imgBox.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = film.title;

  const genre = document.createElement("p");
  genre.textContent = film.genre_ids.join(", ");
  
  const rating = document.createElement("span");
  rating.classList.add("rating");
  if (film.ratingClass >= 7) rating.classList.add("green");
  else if (film.vote_average < 5) rating.classList.add("red");
  rating.textContent = film.vote_average.toFixed(2);
  
  card.append(imgBox, title, genre, rating);
  return card;
}
