import { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import './Styles/Container.css'
function Container(props){
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get(props.uri)
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
        <div id="movies-container" >
            {
                movie.map(e => <Movie mv={e}/>)
            }
        </div>
    )
}

export default Container