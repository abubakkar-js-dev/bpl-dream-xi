import { useEffect, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from 'prop-types';

const Players = ({handleSelectedPayers,selectedPlayers}) => {
    const [players,setPlayers] = useState([]);
    const [isAvailablePlayers,setIsavailablePlayers] = useState(true);
    // fetch players
    useEffect(()=>{
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
    },[])
    return (
        <section className="w-11/12 md:container mx-auto mb-[285px] md:mb-[385px]">
            <div className="flex justify-between items-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-[28px] font-bold text-black">{isAvailablePlayers ? "Available Players" : `Selected Player (${selectedPlayers.length}/${players.length})`}</h2>
                <div className="rounded-2xl border">
                    <button onClick={()=> setIsavailablePlayers(true)} className={`h-[48px] px-[32px] text-base  text-center font-bold rounded-l-2xl ${isAvailablePlayers && 'bg-primary'}`}>Available</button>
                    <button onClick={()=> setIsavailablePlayers(false)} className={`h-[48px] px-[32px] text-base  text-center font-bold rounded-r-2xl ${!isAvailablePlayers && 'bg-primary'}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            {isAvailablePlayers ?
             <AvailablePlayers 
             players={players}
             handleSelectedPayers={handleSelectedPayers}
             ></AvailablePlayers> : 
             <SelectedPlayers
             selectedPlayers = {selectedPlayers}
             ></SelectedPlayers>}
        </section>
    );
};

Players.propTypes = {
    handleSelectedPayers: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
};

export default Players;