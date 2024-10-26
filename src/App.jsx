import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"


function App() {
  const [totalBalance,setTotalBalance] = useState(0);
  const [selectedPlayers,setSelectedPlayers] = useState([]);

  // claim free credit
  const handleFreeCredit = () =>{
    const newBalance = totalBalance + 6000000;
    setTotalBalance(newBalance);
  };

  // select  player (add)
  const handleAddSelectedPayers = (player) => {
    if(player.price <= totalBalance){
      if(selectedPlayers.includes(player)){
        toast('Player is already selected.')
        return;
      }else if(selectedPlayers.length === 6){
        toast('You have already added maximum player.');
        return;
      }
      setSelectedPlayers([...selectedPlayers,player]);
      // update the balance
      const newTotalBalance = totalBalance - player.price;
      setTotalBalance(newTotalBalance);
    }else{
      toast('Not Enough Balance!');
    }
  }

  // remove selected player
  const handleRemoveSelectedPlayer = (selectedPlayer) => {
    const remainingPlayers = selectedPlayers.filter((player) => player.id !== selectedPlayer.id);
    setSelectedPlayers(remainingPlayers);
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
        handleAddSelectedPayers={handleAddSelectedPayers}
        selectedPlayers = {selectedPlayers}
        handleRemoveSelectedPlayer = {handleRemoveSelectedPlayer}
         />
      </main>
      {/* Footer */}
      <Footer />
      {/*  Toast Container */}
      <ToastContainer position='top-center'/>
    </>
  )
}

export default App
