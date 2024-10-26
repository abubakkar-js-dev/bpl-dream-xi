import PropTypes from "prop-types";
import Player from "../Player/Player";
const AvailablePlayers = ({players,handleAddSelectedPayers}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {players.map(player => <Player 
            player={player} 
            key={player.id}
            handleAddSelectedPayers={handleAddSelectedPayers}
            ></Player>)}
        </div>
    );
};

AvailablePlayers.propTypes = {
    players: PropTypes.array.isRequired,
    handleAddSelectedPayers: PropTypes.func.isRequired,
}


export default AvailablePlayers;