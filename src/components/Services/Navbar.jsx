import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from './MobileNavbar';

function Navbar() {

  const [isMobileView,setMobileView]=useState(false);

  return (
    <div className='navbar md:p-4 bg-blue-900 text-white md:px-[30px] max-sm:p-2 '>
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div className='flex md:space-x-6 items-center'>
                <img src={logo} />
                <h1 className='text-lg font-bold'>My Loan Mart</h1>
            </div>
            {/* links */}
            <ul className='flex md:space-x-[40px] text-lg font-semibold max-sm:hidden'>
                <Link to='/Loanproject'>
                  <li>Home</li>
                </Link>
                <Link to='/Loanproject/aboutus'>
                  <li>About</li>
                </Link>
                <li>Contact</li>
                <li className='dropdown'>
                    <Link to='/Loanproject/services'>
                      <button>Services</button>
                    </Link>
                    <div className='content'>
                        <Link to='/Loanproject/services/homeloan'><p>Home Loan</p></Link>
                        <Link to='/Loanproject/services/businessloan'><p>Business Loan</p></Link>
                        <Link to='/Loanproject/services/personalloan'><p>Personal Loan</p></Link>
                        <Link to='/Loanproject/services/mortageloan'><p>Mortage Loan</p></Link>
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

export default Navbar
