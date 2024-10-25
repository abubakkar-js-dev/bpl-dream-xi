import userIcon from '../../assets/icons/user.png'
import flagIcon from '../../assets/icons/flag.png'
import PropTypes from "prop-types";
const Player = ({player}) => {
    const {name,team,role,rating,price,image} = player;
    const {bowling: bowlingRatt, batting: battingRatt} = rating;
    return (
        <div className="p-5 md:p-6 border rounded-2xl">
            <img className="w-full h-[240px] rounded-2xl object-cover mb-5 md:mb-6" src={image} alt="" />
            {/* player info */}
            <div className='space-y-4 mb-4'>
                <div className='flex gap-2 items-center'>
                    <img className='w-5 md:w-7' src={userIcon} alt={`icon of ${name}`} />
                    <h4 className='text-lg md:text-xl font-semibold'>{name}</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={flagIcon} alt="flag icon" />
                        <span className='text-gray-500 text-sm md:text-base'>
                            {team}
                        </span>
                    </div>
                    <p className='px-3 py-2 bg-gray-100 rounded-lg text-xs'>{role}</p>
                </div>
                <hr />
            </div>
            {/* rating content */}
            <div className='space-y-4'>
                <h4 className='text-base font-bold text-black'>Rating</h4>
                <div className='flex justify-between items-center'>
                    <p className='text-black font-semibold text-base'>{battingRatt}</p>
                    <p className='text-base text-gray-600'>{bowlingRatt || 'N/A'}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-black font-semibold text-base'>Price: ${price}</p>
                    <button className='px-4 py-[9px] text-xs text-black border rounded-lg hover:bg-primary transition'>Choose Player</button>
                </div>
            </div>  
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
}

export default Player;