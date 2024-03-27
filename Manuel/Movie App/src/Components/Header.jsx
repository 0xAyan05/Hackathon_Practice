import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './Styles/Header.css'
function Header(){
    const [ search, setSearch ] = useState("")
    const inp = useRef()

    useEffect(()=>{
        axios(`https://movieapp-zyqr.onrender.com/api/v1/movie_name/${search}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }, [search])

    return (
        <>
        <nav className="navbar">
            <div>Logo</div>
            <div className="search-box">
                <input type="text" className='search-bar'
                placeholder='Search' ref={inp}
                onChange={(e)=>{
                    setSearch(inp.current.value)
                }}/>
                <input type="button" className='search-btn' value={'Search'}/>
            </div>
            <div>Account</div>
        </nav>
        </>
    )
}

export default Header