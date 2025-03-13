import { render } from "../libs/utils";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

export function Genre(genre) {
	let div = document.createElement("div");
	const moviesGrind = document.querySelector(".movies-grind");

	div.classList.add("genre");
	div.textContent = genre.name;

	div.onclick = () => {
		api
			.get(`/discover/movie?with_genres=${genre.id}`)
			.then((res) =>
				render(res.data.results.slice(0, 8), moviesGrind, MovieCard)
			);
	};

	return div;
}
