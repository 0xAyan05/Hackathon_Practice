import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Container from "./Components/Container"
function App() {
  return (
    <>
    <Header/>
    <section>
      <Sidebar/>
      <Container uri={'https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies'}>
  
      </Container>
    </section>
    </>
  )
}

export default App
