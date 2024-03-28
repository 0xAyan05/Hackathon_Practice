import { useParams } from "react-router-dom"
import Container from "../Components/Container"

function Search(){
    const { title } = useParams()

    return (
        <Container uri={`https://movieapp-zyqr.onrender.com/api/v1/movie_name/${title}`}/>
    )
}

export default Search