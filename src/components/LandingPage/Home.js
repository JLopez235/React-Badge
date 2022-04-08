import * as React from 'react';
import './Home.css'
import FetchAnimeSearchData from '../../api/RandomAnimeData';
import { useState } from "react";
import AnimeTemplate from './AnimeTemplate';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Home() {
    const [anime, setAnime] = useState("");
    const [hasData, setHasData] = useState(false);
    const [title, setTitle] = useState("")
    let history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault()
        history.push(`/animeSearch?title=${title}`) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        FetchAnimeSearchData()
        .then((response) => {
            setAnime(response.data)
            setHasData(true)
        })
        .catch(error => console.log(error));
    }
    
    if (hasData) {
        console.log(anime)
        return (
            <div>
                <h1 className='header'>Anime World</h1>

                <div id="buttonDiv">
                    <h2 className='header'>
                        Looking for a new anime to watch use our random anime generator
                        to find new animes.(Some anime are NSFW)
                    </h2>
                    <button className="button" onClick={handleSubmit}>Random Anime</button>
                </div>

                <div className='form'>
                    <form onSubmit={onSubmitHandler}> 
                        <label>
                            Anime Search: &nbsp;&nbsp;
                            <input type="text" name="search" onChange={ (event) => setTitle(event.target.value) } />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>

                <div className='template'>
                    <AnimeTemplate anime={anime} />
                </div>
                <Link  to={{ pathname: "/animeDetail", state: {animeId: anime.data.mal_id}}} className='link'>More Details</Link>

            </div>
         )
    }   else {
        return (
            <div>
                <h1 className='header'>Anime World</h1>
                <h2 className='header'>
                        Looking for a new anime to watch use our random anime generator
                        to find new animes.(Some anime are NSFW)
                    </h2>
                <div id="buttonDiv">
                    <button className="button" onClick={handleSubmit}>Random Anime</button>
                </div>

                <div className='form'>
                    <form onSubmit={onSubmitHandler}>
                        <label>
                            Anime Search: &nbsp;&nbsp;
                            <input type="text" name="search" onChange={ (event) => setTitle(event.target.value) } />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;