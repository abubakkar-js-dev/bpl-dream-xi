import { useEffect, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = () => {
    const [players,setPlayers] = useState([]);
    const [isAvailablePlayers,setIsavailablePlayers] = useState(true);
    // fetch players
    useEffect(()=>{
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
    },[])
    return (
        <section className="w-11/12 md:container mx-auto">
            <div className="flex justify-between items-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-[28px] font-bold text-black">{isAvailablePlayers ? "Available Players" : "Selected Player (4/6)"}</h2>
                <div className="rounded-2xl border">
                    <button onClick={()=> setIsavailablePlayers(true)} className={`h-[48px] px-[32px] text-base  text-center font-bold rounded-l-2xl ${isAvailablePlayers && 'bg-primary'}`}>Available</button>
                    <button onClick={()=> setIsavailablePlayers(false)} className={`h-[48px] px-[32px] text-base  text-center font-bold rounded-r-2xl ${!isAvailablePlayers && 'bg-primary'}`}>Selected(0)</button>
                </div>
            </div>
            {isAvailablePlayers ?
             <AvailablePlayers players={players}></AvailablePlayers> : 
             <SelectedPlayers></SelectedPlayers>}
        </section>
    );
};

export default Players;