export function SimilarMovies(movie) {
    const div = document.createElement("div");

    const card = document.createElement("div");
    card.classList.add("movie-card");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img_box");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    img.alt = movie.title;

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.textContent = movie.genre_ids.join(", ");

    const rating = document.createElement("span");
    rating.textContent = movie.vote_average;
    rating.classList.add("rating");

    imgBox.appendChild(img);
    card.appendChild(imgBox);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(rating);

    div.appendChild(card);

    return div;
};