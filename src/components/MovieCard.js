export function MovieCard(movie) {
    const container = document.createElement("div");

    const card = document.createElement("div");
    card.classList.add("movie-card");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img_box");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    img.alt = movie.title;
    imgBox.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.textContent = movie.genre_ids.join(", ");

    const rating = document.createElement("span");
    rating.classList.add("rating");
    if (movie.ratingClass >= 7) rating.classList.add("green");
    else if (movie.vote_average < 5) rating.classList.add("red");
    rating.textContent = movie.vote_average.toFixed(2);

    card.append(imgBox, title, genre, rating);
    container.appendChild(card);

    container.onmouseenter = () => {
        card.style.transform = "scale(1.05)";
    }

    container.onmouseleave = () => {
        card.style.transform = "scale(1)";  
    }

    return container;
};
