export function moviesImage(data) {
    const div = document.createElement("div");
    
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${data.posters[0].file_path}`;
    img.alt = data.title;

    div.appendChild(img);
    return div;
}

export function description(data) {
    const div = document.createElement("div");

    const headerBox = document.createElement("div");
    headerBox.classList.add("header-box");

    const h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = data.title;

    const h3 = document.createElement("h3");
    h3.classList.add("h3");
    h3.textContent = data.original_title;

    const ratingBox = document.createElement("div");
    ratingBox.classList.add("film-rating-box");

    const filmRating = document.createElement("div");
    filmRating.classList.add("film-rating");

    const raitings = document.createElement("div");
    raitings.classList.add("raitings");

    const span = document.createElement("span");
    span.classList.add("span");

    const filmDescription = document.createElement("div");
    filmDescription.classList.add("film-description");

    const p = document.createElement("p");
    p.classList.add("p");
    p.textContent = data.overview;

    filmDescription.appendChild(p);

    headerBox.append(h1, h3);
    ratingBox.append(filmRating);
    filmRating.append(raitings, span);
    filmDescription.appendChild(p);

    div.append(headerBox, ratingBox, filmDescription);

    return div;
};