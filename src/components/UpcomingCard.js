export function UpcomingCard(movie) {
    const container = document.createElement("div");

    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = movie.title;

    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = new Date(movie.release_date).toLocaleDateString("ru-RU", {
        day: "numeric", month: "long", year: "numeric"
    }) + " в кино";

    movieDiv.appendChild(img);
    movieDiv.appendChild(title);
    movieDiv.appendChild(date);

    container.appendChild(movieDiv);

    container.onmouseenter = () => {
        movieDiv.style.transform = "scale(1.05)";
    }

    container.onmouseleave = () => {
        movieDiv.style.transform = "scale(1)";  
    }

    return container;
};