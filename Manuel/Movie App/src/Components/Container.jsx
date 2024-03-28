import { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import './Styles/Container.css'
function Container(props){
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get(props.uri)
        .then(res => {
            const data = res.data.filter(dt => dt.profile_picture_url!='https://image.tmdb.org/t/p/w500')
            setMovie(data)
        })
        .catch(err => console.log(err))
    }, [props.uri])

    return (
        <div id="movies-container" >
            {
                movie.map(e => <Movie mv={e}/>)
            }
        </div>
    )
}

export default Container