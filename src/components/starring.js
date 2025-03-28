export function Starring(actor) {
    const div = document.createElement("div");
    div.classList.add("actor");

    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/original${actor.profile_path}`;
    img.alt = actor.nameRu;
    imgDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("actor-info");

    const nameRu = document.createElement("span");
    nameRu.classList.add("actor-name");
    nameRu.textContent = actor.name;

    const nameEn = document.createElement("span");
    nameEn.classList.add("actor-name", "gray");
    nameEn.textContent = actor.name;

    const role = document.createElement("span");
    role.classList.add("actor-role");
    role.textContent = actor.character;

    infoDiv.append(nameRu, nameEn, role);
    div.append(imgDiv, infoDiv);

    div.onclick = () => {
        window.location.href = `/src/pages/actorPage/?id=${actor.id}`;
    };

    return div;
};