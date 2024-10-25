import Banner from '../../assets/images/banner-main.png';
import './Hero.css';
import PropTypes from 'prop-types';
const Hero = ({handleFreeCredit}) => {
    return (
        <div className='w-11/12 md:container mx-auto flex flex-col justify-center items-center hero-bg h-[545px] rounded-3xl space-y-6 mb-12 md:mb-[88px]'>
           <img className='mx-auto max-w-[248px]' src={Banner} alt="banner img" />
            <div className='text-center'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='text-xl md:text-2xl text-gray-400 font-medium'>Beyond Boundaries Beyond Limits</h4>
            </div>
           <button onClick={handleFreeCredit} className='btn text-base text-black font-bold bg-primary hover:bg-primary/80 outline outline-1 outline-primary outline-offset-4 rounded-xl px-5 py-[12px]'>Claim Free Credit</button>
        </div>
    );
};

Hero.propTypes = {
    handleFreeCredit: PropTypes.func.isRequired,
}

export default Hero;