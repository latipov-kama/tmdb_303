import { api } from "./services/api";

api.get("movie/now_playing")
.then((res => console.log(res.data)));
