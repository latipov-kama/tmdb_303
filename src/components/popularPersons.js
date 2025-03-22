export function createPopularPersonElement(persons) {
  const personDiv = document.createElement("div");
  personDiv.classList.add("person");
  
  const rankSpan = document.createElement("span");
  rankSpan.classList.add("rank");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original${persons.profile_path}`;

  const personInfoDiv = document.createElement("div");
  personInfoDiv.classList.add("person-info");

  const nameP = document.createElement("p");
  nameP.classList.add("name");
  nameP.textContent = persons.name;

  const originalNameP = document.createElement("p");
  originalNameP.classList.add("original-name");
  originalNameP.textContent = persons.original_name;

  personInfoDiv.appendChild(nameP);
  personInfoDiv.appendChild(originalNameP);
  personDiv.appendChild(rankSpan);
  personDiv.appendChild(img);
  personDiv.appendChild(personInfoDiv);

  return personDiv;
}
