export function createActorSection() {
    const section = document.createElement("section");
    section.className = "data-films container";
  
    const mainData = document.createElement("div");
    mainData.className = "main-data";
  
    const poster = document.createElement("img");
    poster.className = "poster post";
    poster.src = "";
    poster.alt = "";
  
    const dataDiv = document.createElement("div");
    dataDiv.className = "data";
  
    const breadcrumb = document.createElement("nav");
    breadcrumb.className = "breadcrumb breadcrum";
    breadcrumb.innerHTML = `
      <a href="#">Главная</a>
      <span> > </span>
      <a href="#">Актёры</a>
      <span> > </span>
      <span class="current"></span>
    `;
  
    const name = document.createElement("h1");
    name.className = "name";
  
    const originalName = document.createElement("p");
    originalName.className = "original-name";
  
    const info = document.createElement("p");
    info.className = "info";
  
    dataDiv.append(breadcrumb, name, originalName, info);
    mainData.append(poster, dataDiv);
    section.appendChild(mainData);
  
    const detailsData = document.createElement("div");
    detailsData.className = "detals-data Actor";
  
    const leftColumn = document.createElement("div");
    leftColumn.className = "left-column";
  
    const infoItems = [
      { label: "Информация" },
      { label: "Биография" },
      { label: "Карьера:", className: "Career" },
      { label: "Рост:", className: "Height" },
      { label: "Дата рождения:", className: "Date_of_birth" },
      { label: "Место рождения:", className: "Place_of_birth" },
      { label: "Жанры:", className: "Genres" },
      { label: "Всего фильмов:", className: "Total_movies" }
    ];
  
    infoItems.forEach(item => {
      const infoItem = document.createElement("div");
      infoItem.className = "info-item";
  
      const span = document.createElement("span");
      span.textContent = item.label;
      infoItem.appendChild(span);
  
      if (item.className) {
        const p = document.createElement("p");
        p.className = item.className;
        infoItem.appendChild(p);
      }
  
      leftColumn.appendChild(infoItem);
    });
  
    detailsData.appendChild(leftColumn);
    section.appendChild(detailsData);
  
    return section;
  }
  
  document.body.appendChild(createActorSection());