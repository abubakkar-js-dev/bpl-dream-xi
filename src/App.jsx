import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Players from "./Components/Players/Players"

function App() {

  return (
    <>
      <header>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
      </header>
      <main>
        {/* Players */}
        <Players />
      </main>
    </>
  )
}

export default App
