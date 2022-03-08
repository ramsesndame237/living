import React, { useEffect, useState } from 'react';
import axios from "../services/axios"

function Row({title,fetchUrl}){

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

            </div>

        </div>
    )
}

export default Row