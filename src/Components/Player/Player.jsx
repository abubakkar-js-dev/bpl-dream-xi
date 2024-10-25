import userIcon from '../../assets/icons/user.png'
import flagIcon from '../../assets/icons/flag.png'
import PropTypes from "prop-types";
const Player = ({player}) => {
    const {name,team,role,rating,price,image} = player;
    const {ballingRatt,battingRatt} = rating;
    return (
        <div className="p-5 md:p-6 border rounded-2xl">
            <img className="w-full h-[240px] rounded-2xl object-cover mb-5 md:mb-6" src={image} alt="" />
            <div>
                <div className='flex gap-2 items-center'>
                    <img className='w-5 md:w-7' src={userIcon} alt={`icon of ${name}`} />
                    <h4 className='text-lg md:text-xl font-semibold'>{name}</h4>
                </div>
            </div>
            <div></div>
         Players   
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
}

export default Player;