import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Container from "./Components/Container"
import Search from "./Endpoints/Search"
import Sidebar from './Components/Sidebar'
function App() {

  const uri = 'https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies'

  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={
          <section>
            <Sidebar />
            <Container uri={uri} />
          </section>
          }/>

          <Route path="/search/:title" element={
          <section>
            <Sidebar />
            <Search />
          </section>
          } />

        </Routes>
      </Router>
    </>
  )
}

export default App
