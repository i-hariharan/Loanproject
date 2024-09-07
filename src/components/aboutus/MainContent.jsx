import React from 'react'
import aboutUs from "../../assets/images/aboutUs.png";
import { GrFormNextLink } from "react-icons/gr";
import collab from "../../assets/images/collab.png";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import business from "../../assets/images/business.jpg";
import Slider from "react-slick";
import Navbar from '../Services/Navbar';

function MainContent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        responsive:[
            
               { breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  fade: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
                },
    }]
      };
      const yearData=[
        {
            id:1,
            year:"2015",
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:2,
            year:"2018",
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:3,
            year:"2021",
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:4,
            year:"2023",
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        }
      ]
  return (
    <div className=' text-white bg-blue-900'>
    
        {/**navbar */}
        <Navbar />

        {/* top-Content */}
        <div className='flex mb-[30px] md:p-4 md:px-[30px] max-sm:p-2 max-sm:w-full max-sm:flex-col-reverse lg:space-x-16'>
            <div className='flex flex-col  justify-center max-sm:w-full max-sm:mt-[20px]'>
                <h1 className='text-4xl font-bold max-sm:text-xl'>About Us</h1>
                <p className='text-lg font-bold max-sm:text-md max-sm:font-thin'>Committed to becoming a top-class digitally enabled 
                    customer focused fintech@scale.
                </p>
                <button className='ring-2 ring-[#11AAA2] rounded-[30px]
                 bg-[#11AAA2] flex justify-center text-lg font-normal md:w-[25%] mt-[30px] max-sm:w-[150px]'>
                    Get Loan
                    <GrFormNextLink size="30"/>
                </button>
            </div>
            <div>
                <img src={business} className=' h-[300px] rounded-md  max-sm:h-[250px] max-sm:w-full'/>
            </div>
        </div>
        {/* aboutus image and content */}
        <div className='bg-white text-black md:p-4 md:px-[30px] max-sm:p-[10px]'>
            <div className='flex items-center max-sm:flex-col'>
                <img src={collab} className='h-[400px] max-sm:h-[300px]'/>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold text-[#4D4D4D]'>Know About Us</h1>
                    <hr className='h-[5px] bg-[#4D4D4D]  rounded-md'/>
                    <p className='text-justify'>Headquartered in Mumbai, L&T Finance Limited (formerly known as L&T Finance Holdings Limited) is one of the leading Non-Banking Financial Companies in India, with a strong presence across the lending business catering to the diverse financing needs of served and underserved customers.
                        L&T Finance offers Personal loans, Two-Wheeler loans, Home loans, Rural Business loans, Farm loans, and SME loans. At L&T Finance, we are committed to providing customised financial solutions that meet the unique needs of our customers. With a focus on innovation and customer-centricity, we aim to be a trusted partner in our customers' financial journey.
                    </p>
                </div>
            </div>
            
        </div>
       
        
        <div className='bg-blue-900 text-center py-[20px]'>
            <div className='w-[95%] mx-auto space-x-2  '>       
           <Slider {...settings} >
            { yearData.map((data)=>(
                <div key={data.id} className='yearBack rounded-md p-2 w-[100px] '>
                <p className='text-lg font-bold '>{data.year}</p>
                <p className='text-md font-normal'>{data.desc}</p>
            </div>
            ))}
            
            
            </Slider>
            </div></div>

            
       
        {/* financial problems */}
        <div className='bg-white p-4 px-[30px] py-[50px] text-black flex justify-between max-sm:p-4 max-sm:flex-col'>
            <div className=''>
            <h1 className='text-3xl font-semibold'>Ready to solve your financial problem?</h1>
            <p className='text-lg font-normal'>It’s free—prequalify without affecting your credit. It’s free—prequalify 
            without affecting your cibil score!</p>
            </div>
            <button className='ring-2 ring-[#11AAA2] rounded-[30px] bg-[#11AAA2] flex justify-center text-lg font-normal w-[20%] mt-[30px] max-sm:w-[50%] text-white'>
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

export default MainContent
