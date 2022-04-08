import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FetchAnimeDetails from '../../api/AnimeDetails';
import AnimeDetailTemplate from './AnimeDetailTemplate';
import "./AnimeDetail.css"
import { Link } from 'react-router-dom';

function AnimeDetail() {
    const location = useLocation()
    const animeId = location.state?.animeId
    const [animeDetail, setAnimeDetail] = useState([]);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        FetchAnimeDetails(animeId)
            .then((response) => {
                setAnimeDetail(response.data)
                setHasData(true)
            })
            .catch(error => console.log(error));
    }, []);

   if (hasData) {
       return (
           <div>
               <div className='homeLink'>
                <Link to="/">
                        <button className='homeButton'>
                            Home
                        </button>
                </Link>
               </div>

                <div className='template'>
                    <AnimeDetailTemplate anime={animeDetail} />
                </div>
            </div>
       )
   } else {
       return (
        <div className='homeLink'>
            <Link to="/">
                    <button className='homeButton'>
                        Home
                    </button>
            </Link>
        </div>
       )
   }
   
}

export default AnimeDetail;