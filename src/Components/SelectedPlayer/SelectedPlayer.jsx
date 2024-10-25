import PropTypes from "prop-types";
import deleteIcon from '../../assets/icons/delete.png'
const SelectedPlayer = ({selectedPlayer}) => {
    const {name,image,role} = selectedPlayer;
    return (
        <div className="p-5 md:p-6 border-2 border-gray-100 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-5 md:gap-6">
                <img className="w-[80px] h-[80px] object-cover rounded-xl" src={image} alt={`image of ${name}`} />
                <div>
                <h4 className="text-xl md:text-2xl text-black font-semibold mb-2">{name}</h4>
                <p>{role}</p>
                </div>
            </div>
            <div>
                <img className="w-5" src={deleteIcon} alt="delete icon" />
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
}
export default SelectedPlayer;