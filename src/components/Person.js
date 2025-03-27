export function createFilmsSection(films) {
    const section = document.createElement("section");
    section.classList.add("films", "container");
  
    const textDiv = document.createElement("div");
    textDiv.classList.add("textss");
    const title = document.createElement("h1");
    title.textContent = "Фильмы";
    textDiv.appendChild(title);
  
    const filmsContainer = document.createElement("div");
    filmsContainer.classList.add("similar-films");
  
    films.forEach(film => {
      const card = document.createElement("div");
      card.classList.add("card-film");
  
      const img = document.createElement("img");
      img.src = film.image;
      img.alt = film.name;
  
      const name = document.createElement("p");
      name.textContent = film.name;
  
      const genre = document.createElement("span");
      genre.textContent = film.genre;
  
      card.append(img, name, genre);
      filmsContainer.appendChild(card);
    });
  
    section.append(textDiv, filmsContainer);
    return section;
  }