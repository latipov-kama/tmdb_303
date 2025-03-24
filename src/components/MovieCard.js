import { header } from "./header";

header();

export function MovieCard(movie) {
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
	rating.textContent = movie.vote_average;

	card.append(imgBox, title, genre, rating);

	card.onmouseenter = () => {
		let bg_img = document.querySelector(".main-img img");

		bg_img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
	};

	card.onclick = () => {
		localStorage.setItem("selectedMovieId", movie.id);
		window.location.href = "./filmPage.html";
	};

	return card;
}
