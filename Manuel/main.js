const root = document.getElementById('root');
class MovieDisplay {
    constructor(movie){
        console.log(movie.fullmovieurl)
        root.style.display = 'block'
        root.style.height = '100dvh'
        let genres = ""
        movie.genres.forEach((e,i) => {
            genres += `${e.name}`
            if(i<movie.genres.length-1) genres += ', '
        })    
       root.innerHTML = `<div id="display-container" name="${movie.id}">
            <div id="display-title">Title: ${movie.title}</div>
            <img id="display-poster" src="${movie.profile_pictureURL}" alt="movie poster" />
            <div id="plot" >Plot: ${movie.overview}</div>
            <div id="genre" >Genre: ${genres}</div>
            <div id="released" >Released: ${movie.release_date}</div>
            <div id="runtime" >Runtime: ${movie.runtime}</div>
            </div>`
    }
}
class Movie {
    constructor(data){
        root.style.display = 'grid'
        root.style.height = 'fit-content'

        root.innerHTML += `<div class="movie-containers" >
                    <div class="title" >${data.title}</div> 
                    <img class="posters" src="${data.profile_picture_url}" alt="movie poster" />
                    <div class="year" >${data.release_date}</div>
                    </div>`
    }
}

function  add_event(ids) {
    const movies = root.childNodes
    movies.forEach((movie, i) =>{
        movie.addEventListener('click', (event)=>{
            getDisplay(ids[i])
        })
    })
}
function getDisplay(id){
    root.innerHTML = ""
    fetch(` https://movieapp-zyqr.onrender.com/api/v1/details/${id}`)
    .then(res => res.json())
    .then(data => new MovieDisplay(data))
    .catch(err=> console.error(err))
}

function get_movies(uri, lim){
        root.innerHTML = ""
        const ids = []
        fetch(uri)
        .then(res => res.json())
        .then(data => {
            console.log(data.length)
            const size = lim? 50: data.length
            for(let i=0; i<size; i++){
                if(data[i].profile_picture_url!='https://image.tmdb.org/t/p/w500')
                {
                    ids.push(data[i].id)
                    new Movie(data[i])
                }
            }
        })
        .catch(err => console.log(err))
        .finally(()=> add_event(ids))
}
function init(){
    const uri = 'https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies'
    get_movies(uri, true)
 }
document.getElementById('submit').onclick = ()=>{
    
    const text = document.getElementById('searchbox').value
    const uri = `https://movieapp-zyqr.onrender.com/api/v1/movie_name/${text}`
    get_movies(uri, false)
}

init()