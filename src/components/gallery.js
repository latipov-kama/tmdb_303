export function createGallery(images) {
    const img1 = document.querySelector("#img1");
    img1.src = `https://image.tmdb.org/t/p/original${images[0].file_path}`;

    const img2 = document.querySelector("#img2");
    img2.src = `https://image.tmdb.org/t/p/original${images[1].file_path}`;
    
    const img3 = document.querySelector("#img3");
    img3.src = `https://image.tmdb.org/t/p/original${images[2].file_path}`;
    
    const img4 = document.querySelector("#img4");
    img4.src = `https://image.tmdb.org/t/p/original${images[3].file_path}`;
    
    const img5 = document.querySelector("#img5");
    img5.src = `https://image.tmdb.org/t/p/original${images[4].file_path}`;
    
    const img6 = document.querySelector("#img6");
    img6.src = `https://image.tmdb.org/t/p/original${images[5].file_path}`;

};