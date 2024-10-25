import PropTypes from "prop-types";
import Player from "../Player/Player";
const AvailablePlayers = ({players,handleSelectedPayers}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {players.map(player => <Player 
            player={player} 
            key={player.id}
            handleSelectedPayers={handleSelectedPayers}
            ></Player>)}
        </div>
    );
};

AvailablePlayers.propTypes = {
    players: PropTypes.array.isRequired,
    handleSelectedPayers: PropTypes.func.isRequired,
}


export default AvailablePlayers;