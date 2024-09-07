import React, { useEffect } from 'react';
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
            <ul className='mobilenavbar md:hidden text-lg font-semibold  ' data-aos="fade-left">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className='mobileDropdown'>
                <button>Services</button>
                <div className='mobileContent'>
                    <p>Home Loan</p>
                    <p>Business Loan</p>
                    <p>Personal Loan</p>
                    <p>Mortage Loan</p>
                </div>
            </li>
        </ul>
        )}
     
    </div>
  )
}

export default MobileNavbar
