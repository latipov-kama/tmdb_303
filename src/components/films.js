import { api } from "../services/api";

export function createFilmsElement(films) {
	const div = document.createElement("div");
	div.classList.add("film");

	const img = document.createElement("img");
	img.src = `https://image.tmdb.org/t/p/original${films.backdrop_path}`;

	const p = document.createElement("p");
	p.textContent = films.title;

	div.appendChild(img);
	div.appendChild(p);

	let iframe = document.querySelector("iframe");

	div.onclick = () => {
		api.get(`/movies/${films.id}/videos`).then((res) => {
			let trailer = res.data.results.find((item) => item.type == "Trailer");
			if (trailer) {
				iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
			} else {
				alert("У этого фильма нет трейлера");
			}
		});
	};
	
	return div;
}
