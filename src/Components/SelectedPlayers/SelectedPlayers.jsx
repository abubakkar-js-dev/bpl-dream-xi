import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
const SelectedPlayers = ({selectedPlayers}) => {
    return (
        <div className="Space-y-4 md:space-y-6">
            {selectedPlayers.map(player => <SelectedPlayer selectedPlayer={player} key={player.id}></SelectedPlayer>)}           
        </div>
    );
};
SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
}
export default SelectedPlayers;