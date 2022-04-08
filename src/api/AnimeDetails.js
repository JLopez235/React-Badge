import axios from "axios";

async function FetchAnimeDetails(animeId) {
    const API_URL = `https://api.jikan.moe/v4/anime/${animeId}`

    return await axios.get(API_URL)
}

export default FetchAnimeDetails;