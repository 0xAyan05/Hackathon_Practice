import './Styles/Movie.css'
function Movie(props){
    const { mv } = props

    return (
        <div className="movie">
                    <div className="title" >{mv.title}</div> 
                    <img className="posters" src={mv.profile_picture_url} alt="movie poster" />
                    <div className="year" >{mv.release_date}</div>
        </div>
    )
}

export default Movie