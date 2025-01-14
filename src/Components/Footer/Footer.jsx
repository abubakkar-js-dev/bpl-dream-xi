import { useEffect, useState } from 'react';
import FooterLogo from '../../assets/images/logo-footer.png';
import './Footer.css';
import { getEmailFromLs, saveEmailToLs } from '../../utilities/localStorage';
import { toast } from 'react-toastify';
const Footer = () => {
    const [emailInput,setEmailInput] = useState('');
    const handleEmailInput = (event) =>{
        const inputValue = event.target.value;
        if(inputValue.includes('@')){
            setEmailInput(inputValue);
        }
    }
 
    const handleSubscribe = ()=>{
        saveEmailToLs(emailInput);
        
    }

    useEffect(()=>{
        const mailFromLs = getEmailFromLs();
        if(mailFromLs){
            toast('You are the regular user. Thank you.');
        }else{
            toast('Hello User, Please Subscribe and stay with us.');
        }
    },[])
    return (
        <footer className='bg-footer relative'>
               {/* news letter section */}
               <div className=' absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-11/12 md:container bg-white/15 border-2 border-white rounded-3xl p-5'>
                    <div className='shadow-bg w-full h-[337px] mx-auto flex flex-col justify-center items-center rounded-3xl border'>
                    <h2 className='mb-4 text-black text-xl md:text-2xl lg:text-3xl font-bold'>Subscribe to our Newsletter</h2>
                    <p className='mb-6 text-base md:text-xl font-medium text-black/70 px-4'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex flex-col md:flex-row gap-4 w-full px-2 justify-center'>
                        <input onChange={handleEmailInput} className='h-[48px] md:h-[56px]  w-full md:w-[360px] pl-6 lg:pl-[30px] rounded-xl border-2 border-gray-100 focus:outline-none' type="email" placeholder='Enter your email'/>
                        <button onClick={handleSubscribe} className="h-[48px] md:h-[56px] btn-bg text-black font-bold px-5 md:px-7 text-base shadow-md rounded-xl">Subscribe</button>
                    </div>
                    </div>
                </div>
                {/* footer logo */}
                <div className='container mx-auto pt-[240px] flex justify-center items-center mb-12 md:mb-[64px]'>
                    <img className='max-w-[142px] h-[140px]' src={FooterLogo} alt="Footer logo" />
                </div>
                {/* footer info */}
                <div className='container mx-auto footer justify-between text-base-content p-10 mb-14 md:mb-[72px]'>
                    <nav>
                    <h6 className="text-base md:text-[18px] font-semibold text-white">About Us</h6>
                    <div>
                    <p className='text-base text-gray-600'>We are a passionate team <br /> 
                    dedicated to providing the best <br /> 
                    services to our customers.</p>
                    </div>
                    </nav>
                    <nav>
                        <h6 className="text-base md:text-[18px] font-semibold text-white">Company</h6>
                        <ul className='flex flex-col gap-3 list-disc pl-4 lg:pl-5'>
                        <li><a className="link link-hover text-base text-gray-600">About us</a></li>
                        <li><a className="link link-hover text-base text-gray-600">Contact</a></li>
                        <li><a className="link link-hover text-base text-gray-600">Jobs</a></li>
                        <li><a className="link link-hover text-base text-gray-600">Press kit</a></li>
                        </ul>
                    </nav>
                    <form>
                        <h6 className="text-base md:text-[18px] font-semibold text-white">Newsletter</h6>
                        <fieldset className="form-control w-80">
                        <label className="label mb-3">
                            <span className="text-base text-gray-600">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                            onChange={handleEmailInput}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered join-item" />
                            <button onClick={handleSubscribe} className="btn text-black text-base font-bold bg-gradient-to-r from-[#F9D586] to-[#E77D9D] join-item focus:outline-none border-none">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                </div>
                <div className='border-b border-gray-800'></div>
                <div className='text-center'>
                <p className='py-6 md:py-8 text-base text-gray-600'>@{new Date().getFullYear()} Your Company All Rights Reserved.</p>
                </div>
        </footer>
    );
};

export default Footer;