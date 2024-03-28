import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Styles/Header.css'

function Header(){
    const [ search, setSearch ] = useState("")
    const [data, setData] = useState([])

    const times = useRef(0)
    const targ = useRef()
    const inp = useRef()
    
    useEffect(()=>{
        times.current += 1
        if(times.current>2 && search!==""){
            axios.get(`https://movieapp-zyqr.onrender.com/api/v1/movie_name/${search}`)
            .then(res => {
                const filtered_data = res.data.filter(dt => dt.title[0]==search[0].toUpperCase())
                const new_data = []

                for(let i=0; i<8; i++){
                    new_data.push(filtered_data[i].title)
                }

                targ.current.style.display = "flex"
                setData(new_data)
            })
            .catch(err => console.log(err))
        }
        else { 
            targ.current.style.display = "none"
            setData([]) 
        }
    }, [search])

    return (
        <>
        <nav className="navbar">
            <Link to={'/'} className='logo'>Logo</Link>
                
                <div className='search-box'>
                  <input type="text" className='search-bar'
                        placeholder='Search'
                        ref={inp}
                        onChange={(e)=>{
                            targ.current.style.display = "flex"
                            setSearch(e.target.value)}
                        }
                />
                    <ul className='suggestions' 
                        ref={targ} >

                        { data.map((title, i) => {
                            return ( 
                            <li key={'suggestion'+i}>
                                <button className='suggested-options' 
                                onClick={(e)=>{
                                    targ.current.style.display = "none"
                                    inp.current.value = e.target.innerHTML
                                    setData([])
                                }} >{title}</button>
                                <div></div>
                            </li> )
                        }) }

                    </ul>
                    
                <button className='search-btn' onClick={(e)=>{
                    targ.current.style.display = "none"
                    if(inp.current.value !== "") 
                        window.open(`/search/${inp.current.value}`, '_self')
                    
                    inp.current.value = ""
                }}>Search</button>

            </div>

            <div>Account</div>
        </nav>
        </>
    )
}
export default Header
