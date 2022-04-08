import axios from "axios";

async function FetchAnimeSearch(animeTitle) {
    const API_URL = `https://api.jikan.moe/v4/anime?q=${animeTitle}&sfw`

    return await axios.get(API_URL)
}

export default FetchAnimeSearch;