import React, { useState } from 'react'
import logo from "../../assets/images/logo.png";
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from './ServiceMobileNavbar';

function ServiceNavbar() {
  const [isMobileView,setMobileView]=useState(false);
  return (
    <div className='navbar md:p-4 md:px-[30px] max-sm:p-2 '>
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div className='flex md:space-x-6 items-center'>
                <img src={logo} />
                <h1 className='text-lg font-bold'>My Loan Mart</h1>
            </div>
            {/* links */}
            <ul className='flex md:space-x-[40px] text-lg font-semibold max-sm:hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className='dropdown'>
                    <button>Services</button>
                    <div className='content'>
                        <p>Home Loan</p>
                        <p>Business Loan</p>
                        <p>Personal Loan</p>
                        <p>Mortage Loan</p>
                    </div>
                </li>
            </ul>
            <span className='md:hidden'>
              <GiHamburgerMenu size="25" onClick={()=>setMobileView(!isMobileView)}/>
              <MobileNavbar isOpen={isMobileView}/>
            </span>
            
            
      </div>
    </div>
  )
}

export default ServiceNavbar
