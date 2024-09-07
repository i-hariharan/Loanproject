import React from 'react'
import Service from "../../assets/images/person_working_on_a_pc.jpg";
import ourService from "../../assets/images/ourService.png";
import whyUs from "../../assets/images/whyUs.png";
import { GrFormNextLink } from "react-icons/gr";
import collab from "../../assets/images/collab.png";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import homeLoan from "../../assets/images/homeLoan.png";
import mortgageLoan from "../../assets/images/mortgage.png";
import business from "../../assets/images/businessLoan.png";
import personalLoan from "../../assets/images/personalLoan.png";

function ServiceContent() {
  return (
    <div className=' text-white  bg-blue-900'>
        {/* top-Content */}
        <div className='flex justify-evenly  mb-[30px] md:p-4 md:px-[30px] max-sm:p-2 max-sm:w-full max-sm:flex-col-reverse'>
            <div className='p-2 md:p-0 flex flex-col md:mr-10 justify-center max-sm:w-full max-sm:mt-[20px]'>
                <h1 className='text-5xl font-bold max-sm:text-xl'>Our Services</h1>
                <p className='text-xl font-bold mt-2 max-sm:text-md max-sm:font-thin'>
                We operate our banking services in many countries 
                around the world.
                </p>
                <button className='ring-2 ring-[#11AAA2] rounded-[30px]
                 bg-[#11AAA2] flex justify-center text-lg font-normal md:w-[25%] mt-[30px] max-sm:w-[150px]'>
                    Get Loan
                    <GrFormNextLink size="30"/>
                </button>
            </div>
            <div className='md:ml-10 flex justify-center'>
                <img src={Service} className='rounded-full h-[500px] max-sm:h-[250px] md:ml-[20px] w-[250px] md:w-[500px]'/>
            </div>
        </div>
        {/* aboutus image and content */}
        <div className='bg-white text-black md:p-4 md:px-[30px] max-sm:p-[10px]'>
            <div className='flex items-center max-sm:flex-col'>
                <img src={ourService} className='h-[400px] max-sm:h-[300px] my-5 md:my-0'/>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold text-[#4D4D4D] '>Our Services</h1>
                    <hr className='h-[5px] bg-[#4D4D4D]  rounded-md'/>
                    <p className='text-justify text-xl'>Headquartered in Mumbai, L&T Finance Limited (formerly known as L&T Finance Holdings Limited) is one of the leading Non-Banking Financial Companies in India, with a strong presence across the lending business catering to the diverse financing needs of served and underserved customers.
                        L&T Finance offers Personal loans, Two-Wheeler loans, Home loans, Rural Business loans, Farm loans, and SME loans. At L&T Finance, we are committed to providing customised financial solutions that meet the unique needs of our customers. With a focus on innovation and customer-centricity, we aim to be a trusted partner in our customers' financial journey.
                    </p>
                </div>
            </div>
            
        </div>
        <div className='bg-white text-black md:p-4 md:px-[30px] max-sm:p-[10px]'>
            <div className='flex items-center max-sm:flex-col'>                
               <img src={collab} className='h-[400px]  max-sm:h-[300px] my-5 md:my-0 md:hidden p-2'/>
            
                <div className='space-y-4'>

                    <h1 className='text-3xl font-bold text-[#4D4D4D]'>Why Us?</h1>
                    <hr className='h-[5px] bg-[#4D4D4D]  rounded-md '/>
                    <p className='text-justify text-xl'>Headquartered in Mumbai, L&T Finance Limited (formerly known as L&T Finance Holdings Limited) is one of the leading Non-Banking Financial Companies in India, with a strong presence across the lending business catering to the diverse financing needs of served and underserved customers.
                        L&T Finance offers Personal loans, Two-Wheeler loans, Home loans, Rural Business loans, Farm loans, and SME loans. At L&T Finance, we are committed to providing customised financial solutions that meet the unique needs of our customers. With a focus on innovation and customer-centricity, we aim to be a trusted partner in our customers' financial journey.
                    </p>
                </div>
                <img src={collab} className='h-[400px] mt-10 max-sm:h-[300px] md:mt-0 hidden md:block'/>
            </div>
            
        </div>

        {/* years */}
        <div className='yearBack py-[50px] p-4 px-[30px]
         flex justify-around text-center max-sm:flex-col max-sm:items-center space-x-2 max-sm:p-4 max-sm:space-y-4'>
            <div className=''>
                <img src={personalLoan} className='h-[100px]' />
                <p className='text-lg font-bold -ml-2'>Personal Loan</p>
                {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
                <img src={business} className='h-[100px]'/>
                <p className='text-lg font-bold -ml-2'>Business Loan</p>
                {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
                <img src={mortgageLoan} className='h-[100px]'/>
                <p className='text-lg font-bold -ml-2'>Mortgage Loan</p>
                {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
                <img src={homeLoan} className='h-[100px]'/>
                <p className='text-lg font-bold'>Home Loan</p>
                {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
        </div>
        {/* financial problems */}
        <div className='bg-white p-4 px-[30px] py-[50px] text-black flex justify-between max-sm:p-4 max-sm:flex-col'>
            <h1 className='text-3xl font-semibold'>Ready to solve your financial problem?</h1>
            <button className='ring-2 ring-[#11AAA2] rounded-[30px] bg-[#11AAA2] flex justify-center text-lg font-normal w-[20%] mt-[30px] md:mt-0 max-sm:w-[50%] text-white'>
                    Get Your Loan Now          
            </button>
        </div>
        {/* footer */}
        <div className='yearBack p-4 px-[30px] py-[50px]'>
            <div className='flex justify-center space-x-6'>
                <FaInstagram  size="30"/>                
                <FaFacebookF  size="30"/>
                <FaLinkedinIn size="30"/>
                <FaXTwitter  size="30"/>
                
            </div>
            <p className='text-lg font-thin text-center mt-[20px]'>Copyright © 2024 Vignesh.All rights reserved</p>
        </div>

    </div>
  )
}

export default ServiceContent
