import React from "react";
import { useLocation, Link } from "react-router-dom";
import FetchAnimeSearch from "../../api/animeSearch";
import { useState, useEffect } from "react";
import AnimeSearchTemplate from "./AnimeSearchTemplate";
import "./AnimeSearch.css"

function AnimeSearch() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const animeTitle = query.get('title');
    const [animeData, setAnimeData] = useState([]);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        FetchAnimeSearch(animeTitle)
            .then((response) => {
                setAnimeData(response.data)
                setHasData(true)
            })
            .catch(error => console.log(error));
    }, []);
    
    console.log(animeData)
   
    if (hasData) {
        return (
            <div>
                <div className="homeLink">
                    <Link to="/">
                        <button className='homeButton'>
                            Home
                        </button>
                    </Link>
                 </div>

                <h1 className="title">Search Results For: {animeTitle} </h1>

                <div className="anime">
                    {       
                        animeData.data.map(anime => {
                            return (
                                <div>
                                    <AnimeSearchTemplate anime={anime}/>
                                </div>
                            )
                            })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="homeLink">
                    <Link to="/">
                        <button className='homeButton'>
                            Home
                        </button>
                    </Link>
                </div>

                {/* <h1>No Animes Were Found With That Name</h1> */}
            </div>
        )
    }
}

export default AnimeSearch;