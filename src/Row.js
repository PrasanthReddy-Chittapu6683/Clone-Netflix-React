import React, { useState, useEffect } from 'react'
import { my_instance } from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const defalutOpt = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const [opts, setOpts] = useState(defalutOpt)
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {

        async function fetData() {
            const request = await my_instance.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetData();
        setOpts({
            height: '390',
            width: (window?.innerWidth || 640) - 10,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        })


    }, [fetchUrl])


    const closeTrailer = () => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
    }
    const playTrailer = (movie) => {

        if (trailerUrl) {
            setTrailerUrl('');
        }
        setMovieDetails(movie);
        setOpts({
            height: '390',
            width: (window?.innerWidth || 640) - 50,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        })
        const movieName = (movie?.name || movie?.original_title)
        movieTrailer(movieName || "")
            .then((url) => {
                const urlParms = new URLSearchParams(new URL(url).search)
                    ;
                setTrailerUrl(urlParms.get('v'))
            }).catch((error) => {
                console.log(error)
                alert(`Opps !! Currently ${movieName} trailer is not available`)
            })


    }

    {/* <svg id="rank-1" viewBox="-20 0 70 154" width="100%" height="100%" style="
    height: 76px;
">
        <path stroke="#595959" stroke-width="4" d="M35.3768546,152 L72,152 L72,2.53765761 L2,19.3621723 L2,49.7031179 L35.3768546,41.2439629 L35.3768546,152 Z" stroke-linejoin="square"></path>
    </svg> */}

    return (
        <div className="row">
            {title}
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.poster_path}`}
                        onClick={() => playTrailer(movie)}
                        title={movie.name} alt={movie.name} />
                    // backdrop_path
                ))}
            </div>
            {trailerUrl &&
                <div>
                    <button className="row__closeTrailer" onClick={() => closeTrailer()} title="Close trailer">X</button>
                    <div className="row_tailerInfo">
                        <h3>{movieDetails?.original_title || movieDetails?.name}   <small style={{ fontWeight: 100 }}> {movieDetails?.vote_average} / 10</small>
                            <small className="row__movieVotes"> {movieDetails?.vote_count} likes </small>
                            {movieDetails?.release_date && <small className="row__moviereleasedate"> Release Date : {movieDetails?.release_date}</small>}

                        </h3>
                        <small>{movieDetails?.overview}</small>
                    </div>
                    <YouTube videoId={trailerUrl} opts={opts}></YouTube>
                </div>

            }
        </div>
    )

}

export default Row
