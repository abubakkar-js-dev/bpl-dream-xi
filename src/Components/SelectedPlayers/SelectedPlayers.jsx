import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
const SelectedPlayers = ({selectedPlayers,handleRemoveSelectedPlayer,handleAddMorePlayer}) => {
    return (
        <div>
        <div className="Space-y-4 md:space-y-6">
            {selectedPlayers.map(player => <SelectedPlayer 
             key={player.id}
             selectedPlayer={player}
             handleRemoveSelectedPlayer = {handleRemoveSelectedPlayer}
             
             ></SelectedPlayer>)}          
        </div>
        <div className="p-1 inline-block border border-black rounded-xl mt-8 md:mt-[48px]">
                <button onClick={handleAddMorePlayer} className="px-5 py-[14px] bg-primary rounded-xl text-base font-bold text-black">Add More Player</button>    
            </div> 
        </div>
    );
};
SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handleRemoveSelectedPlayer: PropTypes.func.isRequired,
    handleAddMorePlayer: PropTypes.func.isRequired,
}
export default SelectedPlayers;