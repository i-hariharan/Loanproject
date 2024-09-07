import React from 'react';
import logo from '../assets/logo.png'
function SuccessPage() {
  return (
    <div>
        <div  className="flex  items-center justify-center bg-gradient-to-r from-blue-800 to-teal-300">
          <hr color='white'/>
           <img src={logo} alt="" className='rounded-full size-12 m-2'/>
           <h1 className='text-xl text-white '> My Loan Mart</h1>
        </div>    
        <div className="flex flex-col  items-center justify-center h-screen  bg-gradient-to-r from-blue-700 to-teal-400">
      <div className="text-center p-6 md:p-12  rounded-lg ">
        <div className="flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center -mt-20">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <div>
        <h2 className=" text-6xl md:text-7xl font-bold text-white mt-4">Successful</h2>
         
         <p className="md:text-3xl  text-white mt-2">
         Your form has been successfully submitted!
         </p>
         <p className="md:text-3xl  text-white mt-2">
        Wait a minute, we will call you back for the confirmation.
         </p>
       
        </div>
          
        <button className="mt-6 bg-[#E1D060]  px-6 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none">
          Go to home
        </button>
      </div>
    </div>
  </div>

  );
}

export default SuccessPage;
