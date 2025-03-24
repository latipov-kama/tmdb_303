export function Posters(poster) {
    const div = document.createElement("div");

    const posterDiv = document.createElement("div");
    posterDiv.classList.add("movie-card");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img_box");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w400${poster.poster_path}`;
    img.alt = poster.title;

    imgBox.appendChild(img);
    posterDiv.appendChild(imgBox);
    div.appendChild(posterDiv);

    return div;
};