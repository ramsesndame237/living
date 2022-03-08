import React, { useEffect, useState } from 'react';
import axios from "../services/axios"

import "./Row.css"

const baseURL ="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl, isLargeRow}){

    const [movies, SetMovies] = useState([])

    useEffect(()=>{
        async function fectchData(){
            const request = await axios.get(fetchUrl)
            console.log(request)
            SetMovies(request.data.results)
            return request
        }
        fectchData()

    },[fetchUrl]);

    console.log("voici la liste des filmes",movies)
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className='row__posters'> 
            {
                movies.map(movie =>( 
                    <img  key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
                ))
            }

            </div>

        </div>
    )
}

export default Row