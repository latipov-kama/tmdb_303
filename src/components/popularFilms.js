export function popularFilms(films) {
    const textsDiv = document.createElement("div");
    textsDiv.classList.add("texts");

    const title = document.createElement("h1");
    title.textContent = "Популярные фильмы";

    const tireDiv = document.createElement("div");
    tireDiv.classList.add("tire");

    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time");

    const years = ["Всё время", "2020", "2019", "2018", "2017", "2016", "2015"];
    years.forEach(year => {
        const yearElement = document.createElement("p");
        yearElement.textContent = year;
        timeDiv.appendChild(yearElement);
    });

    textsDiv.appendChild(title);
    textsDiv.appendChild(tireDiv);
    textsDiv.appendChild(timeDiv);

    const topFilmsDiv = document.createElement("div");
    topFilmsDiv.classList.add("top-films");

    textsDiv.appendChild(topFilmsDiv);

    return textsDiv;
};