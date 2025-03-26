export function createPersonsList(persons) {
    const container = document.createElement("div");
    container.classList.add("persons-wrapper");

    persons.slice(0, 2).forEach((person, index) => {
        const personDiv = document.createElement("div");
        personDiv.classList.add("person");

        const rank = document.createElement("span");
        rank.classList.add("rank");
        rank.textContent = `${index + 1}-е место`;

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${person.profile_path}`;
        img.alt = person.name;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("person-info");

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = person.name;

        const originalName = document.createElement("p");
        originalName.classList.add("original-name");
        originalName.textContent = person.originalName;

        const age = document.createElement("p");
        age.classList.add("age");
        age.textContent = `${person.age} лет`;

        infoDiv.appendChild(name);
        infoDiv.appendChild(originalName);
        infoDiv.appendChild(age);

        personDiv.appendChild(rank);
        personDiv.appendChild(img);
        personDiv.appendChild(infoDiv);

        container.appendChild(personDiv);
    });

    const listDiv = document.createElement("div");
    listDiv.classList.add("persons-list");
    const ul = document.createElement("ul");
    ul.classList.add("ul");

    persons.slice(2).forEach((person, index) => {
        const li = document.createElement("li");

        const listInfo = document.createElement("div");
        listInfo.classList.add("list-info");

        const othersName = document.createElement("p");
        othersName.classList.add("others-name");
        othersName.textContent = person.name;

        const orgName = document.createElement("p");
        orgName.classList.add("org-name");
        orgName.textContent = person.correctOriginalName;

        const age = document.createElement("p");
        age.classList.add("age");
        age.textContent = `${person.age} лет`;

        const place = document.createElement("span");
        place.classList.add("place");
        place.textContent = `${index + 3}-е место`;

        listInfo.appendChild(othersName);
        listInfo.appendChild(orgName);
        listInfo.appendChild(age);

        li.appendChild(listInfo);
        li.appendChild(place);
        ul.appendChild(li);
    });

    listDiv.appendChild(ul);
    container.appendChild(listDiv);

    return container;
}