import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Container from "./Components/Container"
import { useState } from "react"
function App() {
  const [uri, setUri] = useState('https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies')
  
  return (
    <>
    <Header setUri={setUri}/>
    <section>
      <Sidebar/>
      <Container uri={uri}/>
    </section>
    </>
  )
}

export default App
