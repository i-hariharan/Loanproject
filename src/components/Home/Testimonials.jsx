import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img from "../../assets/images/Loanimg1.jpg"
import imgg from "../../assets/images/Loanimg2.jpg"
import imggg from "../../assets/images/Loanimg3.jpg"
import imgggg from "../../assets/images/Loanimg4.jpg"

import feedbackimg  from "../../assets/images/feedbackimg1.jpg"
import feedbackimgg from "../../assets/images/feedbackimg2.jpg"
import feedbackimggg from "../../assets/images/feedbackimg3.jpg"

import trustimg from '../../assets/images/trustimg1.jpg'
import trustimgg from '../../assets/images/trustimg2.jpg' 
import trustimggg from '../../assets/images/trustimg3.jpg' 
import trustimgggg from '../../assets/images/trustimg4.jpg'  

export default function Testimonials() {

    const features = [
        {
          id: 1,
          title: 'Easy process',
          img: img,
          description:
            'The easy process in loans ensures a hassle-free and streamlined experience, with simple applications, minimal documentation, and quick approvals.',
          icon: 'path-to-easy-process-icon.png',
        },
        {
          id: 2,
          title: 'Quick loans',
          img: imgg,
          description:
            'Quick loans provide immediate access to funds for unexpected expenses or financial emergencies, with fast processing and minimal documentation.',
          icon: 'path-to-quick-loans-icon.png',
        },
        {
          id: 3,
          title: 'Funding capacity',
          img:  imggg,
          description:
            'Funding capacity assesses a borrower\'s ability to repay a loan, considering factors like income, credit score, and financial history.',
          icon: 'path-to-funding-capacity-icon.png',
        },
        {
          id: 4,
          title: 'Pre-approved',
          img: imgggg,
          description:
            'Pre-approved loan offers provide eligible borrowers with a guaranteed loan amount and interest rate, streamlining the loan application process.',
          icon: 'path-to-pre-approved-icon.png',
        },
      ];

      const feedback = [
        {
          id: 1,
          img: feedbackimg,
          title: "Description",
        },
        {
          id: 2,
          img: feedbackimgg,
          title: "Description",
        },
        {
          id: 3,
          img: feedbackimggg,
          title: "Description",
        },
      ];

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
      const trustdata=[
        {
            id:1,
            img: trustimg,
            title: 'Customer Database',
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:2,
            img: trustimgg,
            title: 'Partner Touchpoints',
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:3,
            img: trustimggg,
            title: 'Overall book use',
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        },
        {
            id:4,
            img: trustimgggg,
            title: 'Rated by CRISIL,ICRA',
            desc:"Created to provide capital to small businesses. Evaluates business’ actual performance."
        }
      ]

  return (
    <div className="min-h-screen w-full mx-auto">
      {/* What makes us stand out Section */}
      <div className=" mx-auto p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What makes us stand out?
          {/* Divider */}
          <div className="border-t border-gray-800 w-[30%] items-center mx-auto mt-3"></div>
        </h2>
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-10 max-md:space-y-5">
          {features.map((features) => (
            <div
              key={features.id}
              className="bg-gradient-to-r from-teal-500 to-blue-800 p-6 text-white rounded-lg shadow-lg text-center transition transform hover:scale-105"
            >
              <img
                src={features.img}
                alt=""
                className="mx-auto mb-4 h-[150px] w-[300px]"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{features.title}</h3>
              <p className='text-center mx-auto text-justify mt-5'>{features.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 w-[95%] items-center mx-auto"></div>

      {/* Customer Thoughts Section */}
      <div className=" mx-auto px-4 py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What’s the customer thoughts?
          {/* Divider */}
          <div className="border-t border-gray-800 w-[35%] items-center mx-auto mt-3"></div>
        </h2>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1 justify-center gap-5">
          {feedback.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white p-6 rounded-lg text-white shadow-lg w-full"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={feedback.img} alt='' className='mx-auto h-[200px] w-[400px]'/>
              </div>
              <p className='text-justify text-center mx-auto text-black'>{feedback.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Growing with your trust Section */}
      <div className="mx-auto px-4 py-10 w-full bg-blue-900">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Growing with your trust
          {/* Divider */}
          <div className="border-t border-white w-[30%] items-center mx-auto mt-3"></div>
        </h2>
        <div className='bg-white text-center py-[20px] rounded-lg'>
            <div className='w-[95%] mx-auto space-x-2'>       
           <Slider {...settings} >
            { trustdata.map((data)=>(
                <div key={data.id} className='yearBack rounded-md p-2 w-[100px] '>
                  <img src={data.img} alt='' className='mx-auto h-[150px] w-[300px] rounded-lg' />
                  <p className='text-lg font-bold mt-3'>{data.title}</p>
                  <p className='text-md font-normal mt-5 text-justify text-center mx-auto w-[300px]'>{data.desc}</p>
            </div>
            ))}
            
            
            </Slider>
            </div></div>
      </div>
    </div>
  )
}
