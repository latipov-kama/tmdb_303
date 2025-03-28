export function createMainData(actor) {
    console.log(actor);
    
    const mainData = document.createElement("div");
    mainData.classList.add("main-data");
  
    const img = document.createElement("img");
    img.classList.add("poster", "post");
    img.src = "";
    img.alt = "";
  
    const dataDiv = document.createElement("div");
    dataDiv.classList.add("data");
  
    const nav = document.createElement("nav");
    nav.classList.add("breadcrumb", "breadcrum");
  
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Главная";
  
    const separator1 = document.createElement("span");
    separator1.textContent = " > ";
  
    const actorsLink = document.createElement("a");
    actorsLink.href = "#";
    actorsLink.textContent = "Актёры";
  
    const separator2 = document.createElement("span");
    separator2.textContent = " > ";
    separator2.textContent = actor.name
  
    const currentSpan = document.createElement("span");
    currentSpan.classList.add("current");
  
    nav.append(homeLink, separator1, actorsLink, separator2, currentSpan);
  
    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = actor.name
  
    const originalName = document.createElement("p");
    originalName.classList.add("original-name");
    originalName.textContent = actor.name
  
    dataDiv.append(nav, name, originalName);
    mainData.append(img, dataDiv);
  
    return mainData;
  }
  