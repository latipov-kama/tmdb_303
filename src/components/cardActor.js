export function ActorCard(actor) {  
  const actorCard = document.createElement("div");
  actorCard.classList.add("actor-card");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original${actor.profile_path}`;

  const actorName = document.createElement("div");
  actorName.classList.add("actor-name");
  actorName.textContent = actor.name;

  const originalName = document.createElement("div");
  originalName.classList.add("original-name");
  originalName.textContent = actor.original_name;

  const actorRole = document.createElement("div");
  actorRole.classList.add("actor-role");
  actorRole.textContent = actor.character;

  actorCard.appendChild(img);
  actorCard.appendChild(actorName);
  actorCard.appendChild(originalName);
  actorCard.appendChild(actorRole);
  actorCard.onclick = () => {
    localStorage.setItem('actorId', actor.id)
    window.location.href = '/src/pages/cardPersons/'
  }
  return actorCard
}
