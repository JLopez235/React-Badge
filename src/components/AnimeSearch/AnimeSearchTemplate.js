import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimeSearchTemplate = (props) => {
    const [score, setScore] = useState("")
    
    useEffect(() => {
        if (props.anime.score === null) {
            setScore("N/A")
        } else {
            setScore(props.anime.score)
        }
    });
    
    return (
        <div>
            <div className="Image">
                <img src={props.anime.images.jpg.image_url} />
            </div> 
        
            <div className="animeInformation">
                <h1>Title:<br></br> {props.anime.title}</h1>

                <h2>Score: {score}</h2>

                <h2>Rating: {props.anime.rating}</h2>

                <Link  to={{ pathname: "/animeDetail", state: {animeId: props.anime.mal_id}}} className='link'>More Details</Link>
            </div>
        </div>
    )
}


export default AnimeSearchTemplate;