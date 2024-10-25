import Logo from '../../assets/images/logo.png';
import Coin from '../../assets/images/coin.png'
import { useState } from 'react';
import PropTypes from 'prop-types';
const Navbar = ({totalBalance}) => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <nav className="md:container mx-auto mt-8 md:mt-12 mb-4 md:mb-6 w-full">
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex="0" onClick={handleDropdown} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {setIsDropdownOpen &&  <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a className='text-gray-600 text-base' href="">Home</a></li>
                        <li><a className='text-gray-600 text-base' href="">Fixture</a></li>
                        <li><a className='text-gray-600 text-base' href="">Teams</a></li>
                        <li><a className='text-gray-600 text-base' href="">Schedules</a></li>
                    </ul>}
                    </div>
                    <a className="">
                        <img className='w-14 md:w-[72px]' src={Logo} alt="" />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  gap-8">
                        <li><a className='text-gray-600 text-base' href="">Home</a></li>
                        <li><a className='text-gray-600 text-base' href="">Fixture</a></li>
                        <li><a className='text-gray-600 text-base' href="">Teams</a></li>
                        <li><a className='text-gray-600 text-base' href="">Schedules</a></li>
                    </ul>
                </div>
                <div className="ml-4">
                    <a className="btn">
                        <span className='text-base font-semibold'>{totalBalance} Coin</span>
                        <img src={Coin} alt="" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    totalBalance: PropTypes.number.isRequired,
}

export default Navbar;