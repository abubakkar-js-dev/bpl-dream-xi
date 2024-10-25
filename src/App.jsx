import { useState } from "react"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Players from "./Components/Players/Players"

function App() {
  const [totalBalance,setTotalBalance] = useState(0);
  const [selectedPlayers,setSelectedPlayers] = useState([]);

  // claim free credit
  const handleFreeCredit = () =>{
    const newBalance = totalBalance + 6000000;
    setTotalBalance(newBalance);
  };

  // select player 
  const handleSelectedPayers = (player) => {
    if(player.price < totalBalance){
      if(selectedPlayers.includes(player)){
        alert('Player already selected')
        return;
      }
      setSelectedPlayers([...selectedPlayers,player]);
      // update the balance
      const newTotalBalance = totalBalance - player.price;
      setTotalBalance(newTotalBalance);
    }else{
      alert('Not Enough Balance!');
    }
  }

  return (
    <>
      <header>
        {/* Navbar */}
        <Navbar totalBalance={totalBalance} />
        {/* Hero */}
        <Hero handleFreeCredit = {handleFreeCredit} />
      </header>
      <main>
        {/* Players */}
        <Players 
        handleSelectedPayers={handleSelectedPayers}
        selectedPlayers = {selectedPlayers}
         />
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
