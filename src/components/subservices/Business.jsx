import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import personal from "../../assets/images/personal.png";
import business from "../../assets/images/business.png";
import morgageloan from "../../assets/images/morgageloan.png";
import homeloan from "../../assets/images/homeloan.png";

import servicesimg from "../../assets/images/services.png"
import whyusimg from "../../assets/images/whyus.png"
import landimg from "../../assets/images/land.png"
import coinimg from "../../assets/images/coin.png"
import homeimg from "../../assets/images/home.png"
import handimg from "../../assets/images/hand.png"

import homeloanheader from "../../assets/images/home-loan-header.jpg"
import Navbar from '../Services/Navbar';


export default function Business() {

    const data = [
        {
            slug: "business-loan",
            title: "Business Loan",
            hero: {
              image: homeloanheader,
              heading: "Business Loan",
              subheading: "Grow your business with easy access to financing."
            },
            services: {
              title: "Our Services",
              description: "Our Business Loan services are crafted to provide comprehensive support to small, medium, and large enterprises. Whether you're looking to fund a new project, expand into new markets, or manage day-to-day operational costs, our loan options can be customized to your specific needs. We offer working capital loans, equipment financing, and expansion funding, all with flexible repayment options that align with your business cycle. Our fast application process, combined with dedicated customer support, ensures that you get the financing you need when you need it.",
              image: servicesimg,
            },
            whyUs: {
              title: "Why Choose Us?",
              description: "In the ever-evolving world of business, access to timely financing can be the difference between success and stagnation. We understand the unique needs of businesses and are here to support your growth with quick approvals and flexible repayment terms tailored to your cash flow. Our Business Loan services are designed to be straightforward, with clear terms, competitive interest rates, and no hidden fees, ensuring you can focus on what truly matters—scaling your business. Whether you need to purchase equipment, expand operations, or simply maintain working capital, we’re here to help you thrive.",
              image: whyusimg,
            },
            benefits: [
              {
                title: "No Foreclosure Charges",
                description: "Zero pre-closure charges if 12 EMIs are paid.",
                icon: landimg,
              },
              {
                title: "Flexible Tenure",
                description: "Choose a repayment tenure that fits your financial plan.",
                icon: handimg,
              },
              {
                title: "Minimal Documentation",
                description: "Complete your loan process with minimal paperwork.",
                icon: coinimg,
              },
              {
                title: "Fixed Interest Rates",
                description: "Lock in stable and predictable interest rates.",
                icon: homeimg,
              },
              {
                title: "No Collateral Required",
                description: "Secure a personal loan without pledging collateral.",
                icon: landimg,
              }
            ],
            contact: {
              formTitle: "Contact Us",
              fields: [
                { 
                    label: "Name",
                    type: "text",
                    placeholder: "Enter Your Name" 
                },
                {
                  label: "PAN Number",
                  type: "tel",
                  placeholder: "Enter Your PAN Number"
                },
                {
                  label: "Email",
                  type: "email",
                  placeholder: "Enter Your Email"
                },
                {
                  label: "Phone",
                  type: "tel",
                  placeholder: "Enter Your Phone Number"
                },
                {
                  label: "Password",
                  type: "tel",
                  placeholder: "Enter Your Password"
                }
              ]
            }
          },
    ];

  return (
    <div className="flex flex-col mx-auto h-full w-full">
      {data.map((data, index) => (
        <div key={index}>
          {/* Header Section */}
          <section className="hero bg-blue-900 p-6 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left">
                <h1 className="text-6xl font-bold">{data.hero.heading}</h1>
                <p className="text-2xl mt-4">{data.hero.subheading}</p>
                <button className="mt-6 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 text-lg">
                  Get Loan →
                </button>
              </div>
              <img
                src={data.hero.image}
                alt={data.hero.heading}
                className="mt-6 md:mt-0 w-full md:w-1/2 h-auto"
              />
            </div>
          </section>

          {/* Services Section */}
          <section className="services py-8 px-4">
            <div className="md:flex md:items-center md:space-x-4">
              <img
                src={data.services.image}
                alt="Our Services"
                className="w-full md:w-1/2 scale-[60%]"
              />
              <div className="md:w-1/2 mt-6 md:mt-0 mr-8">
                <div className="w-fit">
                  <h2 className="text-4xl font-bold ">{data.services.title}</h2>
                  <hr className="h-[5px] bg-[#4D4D4D]  rounded-md mt-1" />
                </div>

                <p className="mt-4 text-xl">{data.services.description}</p>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section className="why-us py-8 px-4 bg-gray-100">
            <div className="md:flex md:items-center md:space-x-4">
              <div className="md:w-1/2 mx-8">
                <div className="w-fit">
                  <h2 className="text-4xl font-bold">{data.whyUs.title}</h2>
                  <hr className="h-[5px] bg-[#4D4D4D]  rounded-md mt-2" />
                </div>
                <p className="mt-4 text-xl">{data.whyUs.description}</p>
              </div>
              <img
                src={data.whyUs.image}
                alt="Why Us"
                className="w-full md:w-1/2 scale-[60%]"
              />
            </div>
          </section>

          {/* Benefits & Features Section */}
          <section className="benefits py-8 px-4">
            <h2 className="text-center text-2xl font-semibold mb-6">
              Benefits & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#D9D9D9] p-4 shadow rounded-lg text-center py-14"
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-2">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="contact py-8 px-4 bg-gradient-to-r text-white  from-blue-600 to-teal-400 max-w-xl md:mx-auto mx-2 rounded-md md:mt-12">
            <h2 className="text-center text-2xl font-bold mb-6">
              {data.contact.formTitle}
            </h2>
            <form className="max-w-lg mx-auto">
              {data.contact.fields.map((field, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              ))}
              <div className="flex justify-center mt-10">
                <button className="w-3/4 mx-auto px-4 bg-[#11AAA2] text-white p-2 hover:bg-teal-600 rounded-full font-bold">
                  Submit
                </button>
              </div>
            </form>
          </section>

          {/* 4 loans Strip */}
          <div
            className="yearBack py-[50px] p-4 px-[30px]
       flex justify-around text-center max-sm:flex-col max-sm:items-center space-x-2 max-sm:p-4 max-sm:space-y-4 bg-blue-900 md:mt-28 mt-12 text-white"
          >
            <div className="">
              <img src={personal} className="h-[100px]" />
              <p className="text-lg font-bold ">Personal Loan</p>
              {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
              <img src={business} className="h-[100px]" />
              <p className="text-lg font-bold">Business Loan</p>
              {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
              <img src={morgageloan} className="h-[100px]" />
              <p className="text-lg font-bold">Mortgage Loan</p>
              {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
            <div>
              <img src={homeloan} className="h-[100px]" />
              <p className="text-lg font-bold">Home Loan</p>
              {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
            </div>
          </div>

          {/* financial problems */}
          <div className="bg-white p-4 px-[30px]  text-black flex justify-between max-sm:p-4 max-sm:flex-col md:py-28 w-[90%] mx-auto">
            <div className="">
              <h1 className="text-3xl font-semibold">
                Ready to solve your financial problem?
              </h1>
              <p className="text-lg font-normal md:w-[70%] md:mt-2">
                It’s free—prequalify without affecting your credit. It’s
                free—prequalify without affecting your credit!
              </p>
            </div>
            <button className="ring-2 ring-[#11AAA2] rounded-[30px] bg-[#11AAA2] flex justify-center text-lg font-normal md:w-fit h-fit mt-[30px] max-sm:w-[50%] text-white py-2 px-4">
              Get Your Loan Now
            </button>
          </div>

          {/* footer */}
          <div className="yearBack p-4 px-[30px] md:py-32 py-[50px] bg-blue-900 text-white">
            <div className="flex justify-center space-x-6 gap-5 mb-7">
              <FaInstagram size="30" />
              <FaFacebookF size="30" />
              <FaLinkedinIn size="30" />
              <FaXTwitter size="30" />
            </div>
            <p className="text-lg md:font-bold font-thin text-center mt-[20px]">
              Copyright © 2024 Vignesh.All rights reserved
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
