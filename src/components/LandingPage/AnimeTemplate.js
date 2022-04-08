import React from "react";
import { useState, useEffect } from "react";

const AnimeTemplate = (props) => {
    const [score, setScore] = useState("")

    useEffect(() => {
        if (props.anime.data.score === null) {
            setScore("N/A")
        } else {
            setScore(props.anime.data.score)
        }
    });
    
    return (
        <div>
            <div className="animeImage">
                <img src={props.anime.data.images.jpg.image_url} />
            </div>
            

            <h1 className="animeTitle">Title: {props.anime.data.title}</h1>

            <h2 className="animeScore">Score: {score}</h2>


            <h2 className="animeRating">Rating: {props.anime.data.rating}</h2>
            
        </div>
    )
}

export default AnimeTemplate