import React, { useEffect, useState } from 'react'
import { my_instance } from './axios';
import requests from './requests';
import './Banner.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {


    const [movie, setMovie] = useState([])
    useEffect(() => {

        async function fetchData() {
            const request = await my_instance.get(requests.fetchNetflixOginals);

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]

            );
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition: "center top"
        }}>  {/* BackgroundImage */}
            <div className="banner__contents">

                {/* title */}
                <h1 className="banner__title"> {movie?.title || movie?.name || movie?.orginal_name} </h1>

                {/* div & 2 buttons */}
                <div className="banner__buttons">

                    <button className="banner__button">  <PlayArrowIcon /> Play</button>
                    <button className="banner__button"><PlaylistAddCheckIcon /> My List</button>

                </div>

                {/* description */}
                <h1 className="banner__description">  {truncate(movie?.overview, 150)} </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
