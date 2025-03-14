export function createPopularFilmsElement(topFilms) {
  
    const div = document.createElement("div");
  
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade");
    gradeDiv.textContent = topFilms.vote_average;
  
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w400${topFilms.poster_path}`;
  
    const p = document.createElement("p");
    p.textContent = topFilms.title;
  
    const span = document.createElement("span");
    span.textContent = null;
  
    div.appendChild(gradeDiv);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    return div;
  }