import { api } from "./services/api";

const getNowPlaying = api.get("movie/now_playing");

const getPopular = api.get("movie/popular");

Promise.all([getNowPlaying, getPopular])
.then(([nowPlaying, popular]) => {
    console.log(nowPlaying.data);
    console.log(popular.data);
})
.catch((error) => {
    console.error(error);
});