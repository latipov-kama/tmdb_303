export function similarFilm(film) {
    let div = document.createElement("div");
    div.classList.add('similar-films');

    let card_film = document.createElement('div');
    card_film.classList.add('card-film');

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = `https://image.tmdb.org/t/p/original${film.image}`;

    let p = document.createElement('p');
    p.classList.add('p');
    p.textContent = film.name;

    let span = document.createElement('span');
    span.classList.add('span');
    span.textContent = film.genre;

    card_film.append(img, p, span);
    div.append(card_film);
    
    return div;
}
