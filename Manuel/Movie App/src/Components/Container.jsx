import { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import './Styles/Container.css'
function Container(){
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get('https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies')
        .then(res => {
            const data = []
            for(let i=0; i<50; i++){
                data.push(res.data[i])
            }
            setMovie(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div id="movies-container">
            {
                movie.map(e => <Movie mv={e}/>)
            }
        </div>
    )
}

export default Container