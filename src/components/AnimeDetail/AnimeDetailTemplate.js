import React from "react";
import { useState, useEffect } from "react";

const AnimeDetailTemplate = (props) => {
    const [score, setScore] = useState("")
    const [trailer, setTrailer] = useState("")
    let genreList = ""

    useEffect(() => {
        if (props.anime.data.trailer.embed_url === null) {
            setTrailer("Trailer Not Found")
        }   else {
            setTrailer(
            <iframe width="620" height="415"
                src={props.anime.data.trailer.embed_url}>
            </iframe>
            )
        }
    })

    useEffect(() => {
        if (props.anime.data.score === null) {
            setScore("N/A")
        } else {
            setScore(props.anime.data.score)
        }
    });

    return (
        <div>
            <div className="animeImg">
                <img src={props.anime.data.images.jpg.image_url} />
            </div>
            
            <div className="animeInfo">
                <h1 className="animeTitle">Title: {props.anime.data.title}</h1>
                <br></br>
                <br></br>

                <h2 className="animeScore">Score: {score}</h2>


                <h2 className="animeRating">Rating: {props.anime.data.rating}</h2>
            </div>

            <div className="animeTrailer">
                <h1>Trailer:</h1>    
                {trailer}            
            </div>

            

            <div className="animeStatusAndGenre">
                <h2>Status: {props.anime.data.status}</h2>
                <br></br>
                
                {
                    props.anime.data.genres.map(genre => {
                        if (genreList === ""){
                            genreList += `${genre.name}`
                        } else {
                            genreList += `, ${genre.name}`
                        }
                        
                    })
                }
                <h2>Genres: {genreList}</h2>
            </div>

            
        </div>
    )
}

export default AnimeDetailTemplate