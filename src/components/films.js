export function createFilmsElement(films) {
	const div = document.createElement("div");
	div.classList.add("film");

	const img = document.createElement("img");
	img.src = `https://image.tmdb.org/t/p/original${films.backdrop_path}`;

	const p = document.createElement("p");
	p.textContent = films.title;

	div.appendChild(img);
	div.appendChild(p);
	return div;
}
