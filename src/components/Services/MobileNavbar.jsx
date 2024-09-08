import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./MobileNavbar.css";
import Aos from "aos";
import "aos/dist/aos.css";
function MobileNavbar({isOpen}) {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div>
        {isOpen&&(
            <ul className='bg-gray-900/50  text-white mobilenavbar md:hidden text-lg font-semibold  ' data-aos="fade-left">
           <Link to='/Loanproject'>
             <li>Home</li>
           </Link>
            <Link to='/Loanproject/aboutus'>
              <li>About</li>
            </Link>
            <Link to='#'>
              <li>Contact</li>
            </Link>
            <li className='mobileDropdown'>
                <Link to='/Loanproject/services'>
                  <button>Services</button>
                </Link>
                <div className='mobileContent'>
                    <Link to='/Loanproject/services/homeloan'><p>Home Loan</p></Link>
                    <Link to='/Loanproject/services/businessloan'><p>Business Loan</p></Link>
                    <Link to='/Loanproject/services/personalloan'><p>Personal Loan</p></Link>
                    <Link to='/Loanproject/services/mortageloan'><p>Mortage Loan</p></Link>
                </div>
            </li>
        </ul>
        )}
     
    </div>
  )
}

export default MobileNavbar
