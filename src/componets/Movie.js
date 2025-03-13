export function Movies(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img_box");

    const img = document.createElement("img");
    img.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.svg";
    img.alt = movie.title;

    // let backdrop_img = document.createElement('img')
    // backdrop_img.classList.add('main-img')
    // backdrop_img.onmouseenter = () => {
    //     img.src = movie.backdrop_path ? `https://image.tmdb.org/t/p/w900${movie.backdrop_path}` : "/placeholder.svg";
    // }

    imgBox.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.textContent = movie.genre || "Неизвестный жанр";

    const rating = document.createElement("span");
    rating.classList.add("rating");
    rating.textContent = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

    const overlay = document.createElement("div");
    overlay.classList.add("movie-overlay");
    overlay.textContent = "Карточка фильма";

    card.appendChild(imgBox);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(rating);
    card.appendChild(overlay);

    return card;
}


export function Movie(movie) {
    const card = document.createElement("div");
    card.classList.add("movie");

    const img = document.createElement("img")
    img.src = movie.img || "./src/img/placeholder.jpg";
    img.alt = movie.title;

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = movie.title;

    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = movie.date;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(date);

    return card;
}

