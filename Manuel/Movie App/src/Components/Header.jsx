import { useState, useEffect, useRef } from 'react'
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

                targ.current.style.backgroundColor = "#2a1455d2"
                setData(new_data)
            })
            .catch(err => console.log(err))
        }
        else { 
            targ.current.style.backgroundColor = "transparent"
            setData([]) 
        }
    }, [search])

    return (
        <>
        <nav className="navbar">
            <div>Logo</div>

                <div className='search-box'>
                   <input type="text" className='search-bar'
                        placeholder='Search'
                        ref={inp}
                        onChange={(e)=>{
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
                                    targ.current.style.backgroundColor = "transparent"
                                    inp.current.value = e.target.innerHTML
                                    setData([])
                                }} >{title}</button>
                                <div></div>
                            </li> )
                        }) }

                    </ul>
                    
                <button className='search-btn' onClick={(e)=>{
                    
                }}>Search</button>
                </div>

            <div>Account</div>
        </nav>
        </>
    )
}
export default Header
