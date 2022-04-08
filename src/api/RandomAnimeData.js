import axios from "axios";

async function FetchRandomAnimeData() {
    const API_URL = `https://api.jikan.moe/v4/random/anime`

    return await axios.get(API_URL)
}

export default FetchRandomAnimeData;